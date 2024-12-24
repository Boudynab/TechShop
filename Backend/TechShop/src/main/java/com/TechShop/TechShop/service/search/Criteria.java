package com.TechShop.TechShop.service.search;

import com.TechShop.TechShop.service.Category;
import com.TechShop.TechShop.service.Desktop;
import com.TechShop.TechShop.service.Mobile;
import com.TechShop.TechShop.service.MotherBoard;
import com.TechShop.TechShop.service.Processors;
import com.TechShop.TechShop.service.Ram;

import java.util.List;

public interface Criteria {
    List<Category>meetCriteriaCategory(List<Category> Categorys);
    List<Ram> meetCriteriaRam(List<Ram> rams);
    List<Desktop> meetCriteriaDesktop(List<Desktop> desktops);
    List<Mobile> meetCriteriaMobiles(List<Mobile> mobiles);
    List<Processors> meetCriteriaProcessors(List<Processors> processors);
    List<MotherBoard> meetCriteriaMotherbored(List<MotherBoard> motherBoards);
    public String get();
}
