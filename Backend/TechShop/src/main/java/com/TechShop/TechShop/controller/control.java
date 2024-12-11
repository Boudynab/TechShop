package com.TechShop.TechShop.controller;

import com.TechShop.TechShop.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin("*")
@RequestMapping("/TechShop")
public class control {
    private final UserService userService;

    @Autowired
    public control(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/login")
    public ResponseEntity<Object>login(@RequestBody TechShopDTO DTO){
        try{
            return ResponseEntity.ok(userService.getUser(DTO.getEmail(),DTO.getPassword()));
        }
        catch (Exception e){
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Internal Server Error");
        }
    }
    @PostMapping("/register")
    public ResponseEntity<Object>register(@RequestBody TechShopDTO DTO){
        try{
            return ResponseEntity.ok(userService.addUser(DTO.getUsername(),DTO.getEmail(),DTO.getPassword()));
        }
        catch (Exception e){
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Internal Server Error");
        }
    }
}
