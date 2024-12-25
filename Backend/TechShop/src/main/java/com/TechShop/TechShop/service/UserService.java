package com.TechShop.TechShop.service;

import com.TechShop.TechShop.repository.*;
import com.TechShop.TechShop.service.search.Criteria;
import com.TechShop.TechShop.service.search.CriteriaFactory;
import com.TechShop.TechShop.service.search.FilterDTO;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class UserService {
    private final UserRepository userRepository;
    private final CategoryRepository categoryRepository;
    private final DesktopRepository desktopRepository;
    private final MobileRepository mobileRepository;
    private final MotherBoredRepository motherBoredRepository;
    private final RamRepository ramRepository;
    private final ProcessorsRepository processorsRepository;
    private final ShoppingCartRepository shoppingCartRepository;




    @Autowired
    public UserService(UserRepository userRepository, CategoryRepository categoryRepository, DesktopRepository desktopRepository,MobileRepository mobileRepository,MotherBoredRepository motherBoredRepository,RamRepository ramRepository,ProcessorsRepository processorsRepository,ShoppingCartRepository shoppingCartRepository) {
        this.userRepository = userRepository;
        this.categoryRepository = categoryRepository;
        this.desktopRepository = desktopRepository;
        this.mobileRepository= mobileRepository;
        this.motherBoredRepository= motherBoredRepository;
        this.ramRepository=ramRepository;
        this.processorsRepository=processorsRepository;
        this.shoppingCartRepository=shoppingCartRepository;
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
            return "Laptop not found";
        }
        return category;
    }
    @Transactional
    public Object addCategory(Long categoryId, CategoryDTO categoryDTO) {
        if (categoryRepository.findById(categoryId).isPresent()) {
            return "Laptop already exists";
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
            throw new RuntimeException("Error fetching Laptops", e);
        }
    }
    @Transactional
    public Object addDesktop(Long DesktopId, DesktopDTO desktopDTO) {
        if (desktopRepository.findById(DesktopId).isPresent()) {
            return "Desktop already exists";
        }
        Desktop desktop = new Desktop(
                desktopDTO.getName(),
                desktopDTO.getPrice(),
                desktopDTO.getPhoto(),
                desktopDTO.getSpecifications()
        );
        return desktopRepository.save(desktop);
    }
    @Transactional
    public List<Desktop> getAllDesktops() {
        try {
            return desktopRepository.findAll();
        } catch (Exception e) {
            throw new RuntimeException("Error fetching Desktops", e);
        }
    }
    @Transactional
    public Object addMobile(Long MobileId, MobileDTO mobileIdDTO) {
        if (mobileRepository.findById(MobileId).isPresent()) {
            return "Mobile already exists";
        }
        Mobile mobile = new Mobile(
                mobileIdDTO.getName(),
                mobileIdDTO.getPrice(),
                mobileIdDTO.getPhoto(),
                mobileIdDTO.getSpecifications()
        );
        return mobileRepository.save(mobile);
    }
    @Transactional
    public List<Mobile> getAllMobile() {
        try {
            return mobileRepository.findAll();
        } catch (Exception e) {
            throw new RuntimeException("Error fetching Mobiles", e);
        }
    }
    @Transactional
    public Object addMotherBored(Long MotherBoredId, MotherBoredDTO motherBoredDTO) {
        if (mobileRepository.findById(MotherBoredId).isPresent()) {
            return "MotherBored already exists";
        }
        MotherBoard motherBored = new MotherBoard(
                motherBoredDTO.getName(),
                motherBoredDTO.getPrice(),
                motherBoredDTO.getPhoto(),
                motherBoredDTO.getSpecifications()
        );
        return motherBoredRepository.save(motherBored);
    }
    @Transactional
    public List<MotherBoard> getAllMotherBoard() {
        try {
            return motherBoredRepository.findAll();
        } catch (Exception e) {
            throw new RuntimeException("Error fetching MotherBoreds", e);
        }
    }
    @Transactional
    public Object addRam(Long RamId, RamDTO ramDTO) {
        if (ramRepository.findById(RamId).isPresent()) {
            return "Ram already exists";
        }
        Ram ram = new Ram(
                ramDTO.getName(),
                ramDTO.getPrice(),
                ramDTO.getPhoto(),
                ramDTO.getSpecifications()
        );
        return ramRepository.save(ram);
    }
    @Transactional
    public List<Ram> getAllRam() {
        try {
            return ramRepository.findAll();
        } catch (Exception e) {
            throw new RuntimeException("Error fetching Rams", e);
        }
    }
    @Transactional
    public Object addProcessors(Long ProcessorsId, ProcessorsDto processorsDTO) {
        if (processorsRepository.findById(ProcessorsId).isPresent()) {
            return "Processor already exists";
        }
        Processors processors = new Processors(
                processorsDTO.getName(),
                processorsDTO.getPrice(),
                processorsDTO.getPhoto(),
                processorsDTO.getSpecifications()
        );
        return processorsRepository.save(processors);
    }
    @Transactional
    public List<Processors> getAllProcessors() {
        try {
            return processorsRepository.findAll();
        } catch (Exception e) {
            throw new RuntimeException("Error fetching Processors", e);
        }
    }
    public Object searchAllCategories(String criteria) {
        List<Category> allCategories = categoryRepository.findAll();
        return FilterFacadeCategory.filter(new FilterDTO(), allCategories, criteria);
    }
    public Object searchAllRams(String criteria) {
        List<Ram> allRam = ramRepository.findAll();
        return FilterFacadeRams.filter(new FilterDTO(), allRam, criteria);
    }
    public Object searchAllDesktops(String criteria) {
        List<Desktop> allRam = desktopRepository.findAll();
        return FilterFacadeDesktop.filter(new FilterDTO(), allRam, criteria);
    }
    public Object searchAllMobiles(String criteria) {
        List<Mobile> allMobiles = mobileRepository.findAll();
        return FilterFacadeMobile.filter(new FilterDTO(), allMobiles, criteria);
    }
    public Object searchAllProcessors(String criteria) {
        List<Processors> allProcessors = processorsRepository.findAll();
        return FilterFacadeProcessor.filter(new FilterDTO(), allProcessors, criteria);
    }
    public Object searchAllMotherBoreds(String criteria) {
        List<MotherBoard> allMotherBoreds = motherBoredRepository.findAll();
        return FilterFacadeMotherboard.filter(new FilterDTO(), allMotherBoreds, criteria);
    }
    public List<ShoppingCart> getCartByUserId(Long userId) {
        return shoppingCartRepository.findByUserId(userId);
    }
    public List<Object> getCartItems(Long userId) {
        List<ShoppingCart> cartItems = shoppingCartRepository.findByUserId(userId);
        return cartItems.stream()
                .map(cartItem -> {
                    String itemType = cartItem.getItemType();
                    Long itemId = cartItem.getItemId();
                    switch (itemType.toLowerCase()) {
                        case "mobile":
                            Mobile mobile = mobileRepository.findById(itemId)
                                .orElseThrow(() -> new RuntimeException("Mobile item not found for ID: " + itemId));
                            return mobile;
                        case "ram":
                            Ram ram = ramRepository.findById(itemId)
                                .orElseThrow(() -> new RuntimeException("RAM item not found for ID: " + itemId));
                            return ram;
                        default:
                            throw new RuntimeException("Unsupported item type: " + itemType);
                    }
                })
                .collect(Collectors.toList());
    }
    public ShoppingCart addItemToCart(Long userId, Long itemId, String itemType, Integer quantity) {
        ShoppingCart cartItem = new ShoppingCart();
        User user = userRepository.findById(userId).orElseThrow();
        cartItem.setUser(user);
        cartItem.setItemId(itemId);
        cartItem.setItemType(itemType);
        cartItem.setQuantity(quantity);
        return shoppingCartRepository.save(cartItem);
    }

    public void removeItemFromCart(Long cartItemId) {
        shoppingCartRepository.deleteById(cartItemId);
    }
}
