package com.TechShop.TechShop.repository;

import com.TechShop.TechShop.service.Desktop;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface DesktopRepository extends JpaRepository<Desktop,Long> {
    List<Desktop> findAll();
}
