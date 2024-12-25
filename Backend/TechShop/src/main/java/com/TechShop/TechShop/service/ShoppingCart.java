package com.TechShop.TechShop.service;


import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.SequenceGenerator;

import static jakarta.persistence.GenerationType.SEQUENCE;

@Entity
public class ShoppingCart {
    @Id
    @SequenceGenerator(
            name ="shoppingcart_sequence",
            sequenceName = "shoppingcart_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = SEQUENCE,
            generator = "shoppingcart_sequence"
    )
    private Long id;


    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user;


    private Long itemId; 
    private String itemType;  
    private Integer quantity;

    public ShoppingCart(){}
    public ShoppingCart(User user,Long itemId ,String itemType, Integer quantity) {
        this.user = user;
        this.itemId = itemId;
        this.itemType = itemType;
        this.quantity = quantity;
    }
    public Long getItemId() {
        return itemId;
    }
    public void setItemId(Long itemId) {
        this.itemId = itemId;
    }
    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }
    public User getUser() {
        return user;
    }
    public void setUser(User user) {
        this.user = user;
    }
    public String getItemType() {
        return itemType;
    }
    public void setItemType(String itemType) {
        this.itemType = itemType;
    }
    public Integer getQuantity() {
        return quantity;
    }
    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }
}
