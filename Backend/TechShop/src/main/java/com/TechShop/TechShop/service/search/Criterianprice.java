package com.TechShop.TechShop.service.search;

import com.TechShop.TechShop.service.Category;
import com.TechShop.TechShop.service.CategoryDTO;
import com.TechShop.TechShop.service.Desktop;
import com.TechShop.TechShop.service.Mobile;
import com.TechShop.TechShop.service.MotherBoard;
import com.TechShop.TechShop.service.Processors;
import com.TechShop.TechShop.service.Ram;

import java.util.ArrayList;
import java.util.List;

public class Criterianprice implements Criteria {
    private final String price;
    public Criterianprice(CategoryDTO dto) {
        this.price = dto.getPrice(); // Ensure getPrice() returns a double
    }
    public Criterianprice(String price) {
        this.price = price;
    }
    @Override
    public List<Category> meetCriteriaCategory(List<Category> categories) {
        List<Category> filteredCategories = new ArrayList<>();
        for (Category category : categories) {
            if (category.getPrice().contains(this.price)) {
                filteredCategories.add(category);
            }
        }
        return filteredCategories;
    }
    @Override
    public List<Ram> meetCriteriaRam(List<Ram> rams) {
        List<Ram> filteredRams = new ArrayList<>();
        for (Ram ram : rams) {
            if (ram.getName().contains(this.price)) {
                filteredRams.add(ram);
            }
        }
        return filteredRams;
    }
    @Override
    public List<Desktop> meetCriteriaDesktop(List<Desktop> desktops) {
        List<Desktop> filteredDesktops = new ArrayList<>();
        for (Desktop desktop : desktops) {
            if (desktop.getName().contains(this.price)) {
                filteredDesktops.add(desktop);
            }
        }
        return filteredDesktops;
    }
    @Override
    public List<Mobile> meetCriteriaMobiles(List<Mobile> mobiles) {
        List<Mobile> filteredMobiles = new ArrayList<>();
        for (Mobile mobile : mobiles) {
            if (mobile.getName().contains(this.price)) {
                filteredMobiles.add(mobile);
            }
        }
        return filteredMobiles;
    }
    @Override
    public List<Processors> meetCriteriaProcessors(List<Processors> processors) {
        List<Processors> filteredProcessors = new ArrayList<>();
        for (Processors processor : processors) {
            if (processor.getName().contains(this.price)) {
                filteredProcessors.add(processor);
            }
        }
        return filteredProcessors;
    }
    @Override
    public List<MotherBoard> meetCriteriaMotherbored(List<MotherBoard> motherBoards) {
        List<MotherBoard> filteredMotherBoards = new ArrayList<>();
        for (MotherBoard motherBoard : motherBoards) {
            if (motherBoard.getName().contains(this.price)) {
                filteredMotherBoards.add(motherBoard);
            }
        }
        return filteredMotherBoards;
    }
    public String get(){
        return this.price;
    }
}
