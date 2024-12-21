package com.TechShop.TechShop.service;

import com.TechShop.TechShop.repository.CategoryRepository;
import com.TechShop.TechShop.repository.DesktopRepository;
import com.TechShop.TechShop.repository.UserRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {
    private final UserRepository userRepository;
    private final CategoryRepository categoryRepository;
    private final DesktopRepository desktopRepository;


    @Autowired
    public UserService(UserRepository userRepository, CategoryRepository categoryRepository, DesktopRepository desktopRepository) {
        this.userRepository = userRepository;
        this.categoryRepository = categoryRepository;
        this.desktopRepository = desktopRepository;
    }
    @Transactional
    public Object getUser(String email, String password) {
        User user = userRepository.findByEmail(email);
        if (user == null) {
            return "User not found";
        }
        if (!user.getPassword().equals(password)) {
            return "Wrong Password";
        }
        return user;
    }
    @Transactional
    public Object addUser(String username,String email,String password){
        if(userRepository.findByEmail(email)!=null){
            return "User already exists";
        }
        return userRepository.save(new User(username,email,password));
    }
    @Transactional
    public Object getCategory(Long categoryID){
        Category category = categoryRepository.findById(categoryID).orElseThrow();
        if(category==null){
            return "NOT FOUND";
        }
        return category;
    }
    @Transactional
    public Object addCategory(Long categoryId, CategoryDTO categoryDTO) {
        if (categoryRepository.findById(categoryId).isPresent()) {
            return "Category already exists";
        }
        Category category = new Category(
                categoryDTO.getName(),
                categoryDTO.getPrice(),
                categoryDTO.getPhoto(),
                categoryDTO.getSpecifications()
        );
        return categoryRepository.save(category);
    }
    @Transactional
    public List<Category> getAllCategories() {
        try {
            return categoryRepository.findAll();
        } catch (Exception e) {
            throw new RuntimeException("Error fetching categories", e);
        }
    }
    @Transactional
    public Object addDesktop(Long DesktopId, DesktopDTO desktopDTO) {
        if (desktopRepository.findById(DesktopId).isPresent()) {
            return "Category already exists";
        }
        Desktop desktop = new Desktop(
                desktopDTO.getName(),
                desktopDTO.getPrice(),
                desktopDTO.getPhoto()
        );
        return desktopRepository.save(desktop);
    }
    @Transactional
    public List<Desktop> getAllDesktops() {
        try {
            return desktopRepository.findAll();
        } catch (Exception e) {
            throw new RuntimeException("Error fetching categories", e);
        }
    }
}
