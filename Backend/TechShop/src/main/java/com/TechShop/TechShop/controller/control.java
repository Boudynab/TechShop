package com.TechShop.TechShop.controller;

import com.TechShop.TechShop.service.*;
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
    @GetMapping("/getAllCategories")
    public ResponseEntity<Object> getAllCategories() {
        try {
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
            @RequestParam("photo") MultipartFile photo,
            @RequestParam("specifications") List<String> specifications
    ) {
        try {
            byte[] photoBytes = photo.getBytes();
            DesktopDTO desktopDTO = new DesktopDTO(name, price, photoBytes,specifications);
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
    @PostMapping("/addMobile/{MobileId}")
    public ResponseEntity<Object> addMobile(
            @PathVariable Long MobileId,
            @RequestParam("name") String name,
            @RequestParam("price") String price,
            @RequestParam("photo") MultipartFile photo,
            @RequestParam("specifications") List<String> specifications
    ) {
        try {
            byte[] photoBytes = photo.getBytes();
            MobileDTO mobileDTO = new MobileDTO(name, price, photoBytes,specifications);
            return ResponseEntity.ok(userService.addMobile(MobileId, mobileDTO));
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Internal Server Error");
        }
    }
    @GetMapping("/getAllMobile")
    public ResponseEntity<Object> getAllMobiles() {
        try {
            return ResponseEntity.ok(userService.getAllMobile());
        } catch (Exception e) {
            System.out.println(e.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Internal Server Error");
        }
    }
    @PostMapping("/addMotherBored/{MotherBoredId}")
    public ResponseEntity<Object> addMotherBored(
            @PathVariable Long MotherBoredId,
            @RequestParam("name") String name,
            @RequestParam("price") String price,
            @RequestParam("photo") MultipartFile photo,
            @RequestParam("specifications") List<String> specifications
    ) {
        try {
            byte[] photoBytes = photo.getBytes();
            MotherBoredDTO motherBoredDTO = new MotherBoredDTO(name, price, photoBytes,specifications);
            return ResponseEntity.ok(userService.addMotherBored(MotherBoredId, motherBoredDTO));
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Internal Server Error");
        }
    }
    @GetMapping("/getAllMotherBoredId")
    public ResponseEntity<Object> getAllMotherBoredId() {
        try {
            return ResponseEntity.ok(userService.getAllMotherBoard());
        } catch (Exception e) {
            System.out.println(e.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Internal Server Error");
        }
    }
    @PostMapping("/addRam/{RamId}")
    public ResponseEntity<Object> addRam(
            @PathVariable Long RamId,
            @RequestParam("name") String name,
            @RequestParam("price") String price,
            @RequestParam("photo") MultipartFile photo,
            @RequestParam("specifications") List<String> specifications
    ) {
        try {
            byte[] photoBytes = photo.getBytes();
            RamDTO ramDTO = new RamDTO(name, price, photoBytes,specifications);
            return ResponseEntity.ok(userService.addRam(RamId, ramDTO));
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Internal Server Error");
        }
    }
    @GetMapping("/getAllRam")
    public ResponseEntity<Object> getAllRam() {
        try {
            return ResponseEntity.ok(userService.getAllRam());
        } catch (Exception e) {
            System.out.println(e.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Internal Server Error");
        }
    }
    @PostMapping("/addProcessors/{ProcessorsId}")
    public ResponseEntity<Object> addProcessors(
            @PathVariable Long ProcessorsId,
            @RequestParam("name") String name,
            @RequestParam("price") String price,
            @RequestParam("photo") MultipartFile photo,
            @RequestParam("specifications") List<String> specifications
    ) {
        try {
            byte[] photoBytes = photo.getBytes();
            ProcessorsDto processorsDto = new ProcessorsDto(name, price, photoBytes,specifications);
            return ResponseEntity.ok(userService.addProcessors(ProcessorsId, processorsDto));
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Internal Server Error");
        }
    }
    @GetMapping("/getAllProcessors")
    public ResponseEntity<Object> getAllProcessors() {
        try {
            return ResponseEntity.ok(userService.getAllProcessors());
        } catch (Exception e) {
            System.out.println(e.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Internal Server Error");
        }
    }
}
