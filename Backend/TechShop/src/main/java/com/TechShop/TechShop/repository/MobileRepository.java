package com.TechShop.TechShop.repository;

import com.TechShop.TechShop.service.Category;
import com.TechShop.TechShop.service.Mobile;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MobileRepository extends JpaRepository<Mobile,Long> {
    List<Mobile> findAll();
}
