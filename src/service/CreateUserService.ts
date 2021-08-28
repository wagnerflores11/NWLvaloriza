import { UserRepositories } from "../repository/UsersRepositories"


interface IUserRequest{
    name: string;
    email: string;
    admin?: boolean
}


class CreateUserService {
    async execute({name, email, admin}: IUserRequest) {
        const UserRepository = new UserRepositories();

        if(!email) {
            throw new Error("Email incorrect");
        }

        const usersAlreadyExists = await UserRepository.findOne({
            email,
        })
        if (usersAlreadyExists) {
            throw new Error('User already exists')
        }

        const user = UserRepository.create({
            name,
            email,
            admin,
        })
        await UserRepository.save(user);

        return user;
    }
}

export { CreateUserService }
