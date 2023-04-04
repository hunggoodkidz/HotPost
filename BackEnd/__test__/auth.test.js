import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import User from '../models/User.js'
import { register, login } from '../controllers/auth.js'

describe('register function', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  it('should create new user if given valid input and return status 201 with savedUser', async () => {
    const req = {
      body: {
        firstName: 'John',
        lastName: 'Doe',
        email: 'johndoe@gmail.com',
        password: 'password123',
        picturePath: 'example.jpg',
        friends: ['friend1'],
        location: 'New York',
        occupation: 'Software Engineer',
      },
    }
    const mockSalt = jest.spyOn(bcrypt, 'genSalt').mockResolvedValue(10)
    const mockHash = jest
      .spyOn(bcrypt, 'hash')
      .mockResolvedValue('hashedPassword')
    const mockSave = jest.spyOn(User.prototype, 'save').mockResolvedValue({
      _id: 1,
      ...req.body,
      password: 'hashedPassword',
      viewedProfile: expect.any(Number),
      impressions: expect.any(Number),
    })
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    }

    await register(req, res)

    expect(mockSalt).toHaveBeenCalled()
    expect(mockHash).toHaveBeenCalledWith(req.body.password, 10)
    expect(mockSave).toHaveBeenCalled()
    expect(res.status).toHaveBeenCalledWith(201)
    expect(res.json).toHaveBeenCalledWith({
      _id: 1,
      ...req.body,
      password: 'hashedPassword',
      viewedProfile: expect.any(Number),
      impressions: expect.any(Number),
    })
  })

  it('should return status 500 with error message', async () => {
    const req = {
      body: {
        firstName: 'John',
        lastName: 'Doe',
        email: 'johndoe@gmail.com',
        password: 'password123',
      },
    }
    const mockError = new Error('failed to save user')
    const mockSalt = jest.spyOn(bcrypt, 'genSalt').mockRejectedValue(mockError)
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    }

    await register(req, res)

    expect(mockSalt).toHaveBeenCalled()
    expect(res.status).toHaveBeenCalledWith(500)
    expect(res.json).toHaveBeenCalledWith({ error: mockError.message })
  })
})

describe('login function', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  it('should return status 400 if user does not exist', async () => {
    const req = {
      body: {
        email: 'nonexistentuser@gmail.com',
        password: 'password123',
      },
    }
    const mockFindOne = jest.spyOn(User, 'findOne').mockResolvedValue(null)
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    }

    await login(req, res)

    expect(mockFindOne).toHaveBeenCalledWith({ email: req.body.email })
    expect(res.status).toHaveBeenCalledWith(400)
    expect(res.json).toHaveBeenCalledWith({ msg: 'User does not exist. ' })
  })

  it('should return status 400 if given invalid credentials', async () => {
    const req = {
      body: {
        email: 'johndoe@gmail.com',
        password: 'invalidPassword',
      },
    }
    const mockUser = {
      _id: 1,
      firstName: 'John',
      lastName: 'Doe',
      email: 'johndoe@gmail.com',
      password: 'hashedPassword',
    }
    const mockFindOne = jest.spyOn(User, 'findOne').mockResolvedValue(mockUser)
    const mockCompare = jest.spyOn(bcrypt, 'compare').mockResolvedValue(false)
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    }

    await login(req, res)

    expect(mockFindOne).toHaveBeenCalledWith({ email: req.body.email })
    expect(mockCompare).toHaveBeenCalledWith(
      req.body.password,
      mockUser.password
    )
    expect(res.status).toHaveBeenCalledWith(400)
    expect(res.json).toHaveBeenCalledWith({ msg: 'Invalid credentials. ' })
  })

  it('should return status 500 with error message', async () => {
    const req = {
      body: {
        email: 'johndoe@gmail.com',
        password: 'password123',
      },
    }
    const mockError = new Error('failed to find user')
    const mockFindOne = jest.spyOn(User, 'findOne').mockRejectedValue(mockError)
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    }

    await login(req, res)

    expect(mockFindOne).toHaveBeenCalledWith({ email: req.body.email })
    expect(res.status).toHaveBeenCalledWith(500)
    expect(res.json).toHaveBeenCalledWith({ error: mockError.message })
  })
})
