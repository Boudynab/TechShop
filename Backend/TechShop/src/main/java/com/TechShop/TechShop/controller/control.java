package com.TechShop.TechShop.controller;

import com.TechShop.TechShop.service.UserService;
import com.TechShop.TechShop.repository.ShoppingCartRepository;
import com.TechShop.TechShop.service.CategoryDTO;
import com.TechShop.TechShop.service.DesktopDTO;
import com.TechShop.TechShop.service.MobileDTO;
import com.TechShop.TechShop.service.MotherBoredDTO;
import com.TechShop.TechShop.service.ProcessorsDto;
import com.TechShop.TechShop.service.RamDTO;
import com.TechShop.TechShop.service.StoreageDriveDTO;
import com.TechShop.TechShop.service.ShoppingCart;
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
    @PostMapping("/addStorageDrive/{StoreageDriveId}")
    public ResponseEntity<Object> addStorageDrive(
            @PathVariable Long StoreageDriveId,
            @RequestParam("name") String name,
            @RequestParam("price") String price,
            @RequestParam("photo") MultipartFile photo,
            @RequestParam("specifications") List<String> specifications
    ) {
        try {
            byte[] photoBytes = photo.getBytes();
            StoreageDriveDTO storageDriveDTO = new StoreageDriveDTO(name, price, photoBytes, specifications);
            return ResponseEntity.ok(userService.addStoreageDrive(StoreageDriveId, storageDriveDTO));
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Internal Server Error");
        }
    }
    @GetMapping("/getAllStorageDrive")
    public ResponseEntity<Object> getAllStorageDrive() {
        try {
            return ResponseEntity.ok(userService.getAllStoreageDrive());
        } catch (Exception e) {
            System.out.println(e.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Internal Server Error");
        }
    }
    @GetMapping("/search/Category/{criteria}")
    public ResponseEntity<Object> searchCategories(@PathVariable String criteria) {
        try {
            Object result = userService.searchAllCategories(criteria);
            return ResponseEntity.ok(result);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error: " + e.getMessage());
        }
    }
    @GetMapping("/search/Ram/{criteria}")
    public ResponseEntity<Object> searchRam(@PathVariable String criteria) {
        try {
            Object result = userService.searchAllRams(criteria);
            return ResponseEntity.ok(result);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error: " + e.getMessage());
        }
    }
    @GetMapping("/search/Desktop/{criteria}")
    public ResponseEntity<Object> searchDesktop(@PathVariable String criteria) {
        try {
            Object result = userService.searchAllDesktops(criteria);
            return ResponseEntity.ok(result);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error: " + e.getMessage());
        }
    }
    @GetMapping("/search/Mobile/{criteria}")
    public ResponseEntity<Object> searchMobile(@PathVariable String criteria) {
        try {
            Object result = userService.searchAllMobiles(criteria);
            return ResponseEntity.ok(result);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error: " + e.getMessage());
        }
    }
    @GetMapping("/search/MotherBored/{criteria}")
    public ResponseEntity<Object> searchMotherBored(@PathVariable String criteria) {
        try {
            Object result = userService.searchAllMotherBoreds(criteria);
            return ResponseEntity.ok(result);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error: " + e.getMessage());
        }
    }
    @GetMapping("/search/Processors/{criteria}")
    public ResponseEntity<Object> searchProcessors(@PathVariable String criteria) {
        try {
            Object result = userService.searchAllProcessors(criteria);
            return ResponseEntity.ok(result);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error: " + e.getMessage());
        }
    }
    // @GetMapping("/search/All/{criteria}")
    // public ResponseEntity<Object> searchAll(@PathVariable String criteria) {
    //     try {
    //         Object result = userService.searchAll(criteria);
    //         return ResponseEntity.ok(result);
    //     } catch (Exception e) {
    //         return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error: " + e.getMessage());
    //     }
    // }
    @GetMapping("/getCart/{userId}")
    public ResponseEntity<List<Object>> getCart(@PathVariable Long userId) {
        List<Object> itemDetails = userService.getCartItems(userId);
        return ResponseEntity.ok(itemDetails);
    }

    @PostMapping("/addcart")
    public ResponseEntity<ShoppingCart> addToCart(@RequestBody AddToCartRequest request) {
        ShoppingCart cartItem = userService.addItemToCart(
                request.getUserId(),
                request.getItemId(),
                request.getItemType(),
                request.getQuantity()
        );
        return ResponseEntity.ok(cartItem);
    }

    @DeleteMapping("/removeItem/{cartItemId}")
    public ResponseEntity<Void> removeFromCart(@PathVariable Long cartItemId) {
        userService.removeItemFromCart(cartItemId);
        return ResponseEntity.noContent().build();
    }
    @DeleteMapping("/removeItem")
    public ResponseEntity<Void> removeAllFromCart() {
        userService.removeAllItem();
        return ResponseEntity.noContent().build();
    }
}
