package com.TechShop.TechShop.controller;

import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class TechShopDTO {
    private String username;
    private String email;
    private String password;

    public TechShopDTO(String username, String email, String password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

}
