package com.TechShop.TechShop.service;

import com.TechShop.TechShop.repository.UserRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    private final UserRepository userRepository;

    @Autowired
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }
    @Transactional
    public Object getUser(String email,String password){
        if(userRepository.findByEmailAndPassword(email,password)==null){
            if(userRepository.findByEmail(email)!=null){
                return "Wrong Password";
            }
            else{
                return "User not found";
            }
        }
        return userRepository.findByEmailAndPassword(email,password);
    }
    @Transactional
    public Object addUser(String username,String email,String password){
        if(userRepository.findByEmail(email)!=null){
            return "User already exists";
        }
        return userRepository.save(new User(username,email,password));
    }
}
