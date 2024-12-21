package com.TechShop.TechShop.controller;

import com.TechShop.TechShop.service.CategoryDTO;
import com.TechShop.TechShop.service.DesktopDTO;
import com.TechShop.TechShop.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

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
//    @PostMapping("/addCategory/{CategoryID}")
//    public ResponseEntity<Object>addcategory(@PathVariable Long CategoryID,@RequestBody CategoryDTO DTO){
//        try{
////            return ResponseEntity.ok(userService.addCategory(DTO));
//            return ResponseEntity.ok(userService.addCategory(CategoryID,DTO));
//        }
//        catch (Exception e){
//            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Internal Server Error");
//        }
//    }
    @PostMapping("/addCategory/{CategoryID}")
    public ResponseEntity<Object> addCategory(
            @PathVariable Long CategoryID,
            @RequestParam("name") String name,
            @RequestParam("price") String price,
            @RequestParam("photo") MultipartFile photo,
            @RequestParam("specifications") List<String> specifications

    ) {
        try {
            byte[] photoBytes = photo.getBytes();
            CategoryDTO categoryDTO = new CategoryDTO(name,price,photoBytes,specifications);
            return ResponseEntity.ok(userService.addCategory(CategoryID,categoryDTO));
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Internal Server Error");
        }
    }
//    @GetMapping("/getCategory/{id}")
//    public ResponseEntity<Object>getcategory(@PathVariable Long id){
//        try{
//            return ResponseEntity.ok(userService.getCategory(id));
//        }
//        catch (Exception e){
//            System.out.println(userService.getCategory(id));
//            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Internal Server Error");
//        }
//    }
    @GetMapping("/getAllCategories") // Endpoint to get all categories (or contacts)
    public ResponseEntity<Object> getAllCategories() {
        try {
            // Assuming your service has a method called getAllCategories() or getAllContacts()
            return ResponseEntity.ok(userService.getAllCategories());
        } catch (Exception e) {
            System.out.println(e.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Internal Server Error");
        }
    }
    @PostMapping("/addDesktop/{DesktopId}")
    public ResponseEntity<Object> addDesktop(
            @PathVariable Long DesktopId,
            @RequestParam("name") String name,
            @RequestParam("price") String price,
            @RequestParam("photo") MultipartFile photo
    ) {
        try {
            byte[] photoBytes = photo.getBytes();
            DesktopDTO desktopDTO = new DesktopDTO(name, price, photoBytes);
            return ResponseEntity.ok(userService.addDesktop(DesktopId, desktopDTO));
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Internal Server Error");
        }
    }
    @GetMapping("/getAllDesktops")
    public ResponseEntity<Object> getAllDesktops() {
        try {
            return ResponseEntity.ok(userService.getAllDesktops());
        } catch (Exception e) {
            System.out.println(e.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Internal Server Error");
        }
    }
}
