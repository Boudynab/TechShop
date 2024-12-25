package com.TechShop.TechShop.controller;

public class AddToCartRequest {
    private Long userId;
    private Long itemId;
    private String itemType;
    private Integer quantity;
    
    public AddToCartRequest(Long userId, Long itemId, String itemType, Integer quantity) {
        this.userId = userId;
        this.itemId = itemId;
        this.itemType = itemType;
        this.quantity = quantity;
    }
    public Long getUserId() {
        return userId;
    }
    public void setUserId(Long userId) {
        this.userId = userId;
    }
    public Long getItemId() {
        return itemId;
    }
    public void setItemId(Long itemId) {
        this.itemId = itemId;
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
