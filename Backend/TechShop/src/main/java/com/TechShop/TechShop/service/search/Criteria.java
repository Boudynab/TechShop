package com.TechShop.TechShop.service.search;

import com.TechShop.TechShop.service.Category;
import com.TechShop.TechShop.service.Ram;

import java.util.List;

public interface Criteria {
    List<Category>meetCriteriaCategory(List<Category> Categorys);
    List<Ram> meetCriteriaRam(List<Ram> rams);
    public String get();
}
