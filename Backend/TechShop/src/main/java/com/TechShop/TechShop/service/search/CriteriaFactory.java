package com.TechShop.TechShop.service.search;

public class CriteriaFactory {
        public static Criteria getCriteria(FilterDTO dto, String criteria) {
            return switch (criteria) {
//                case "name" -> new Criterianame(dto);
//                case "price" -> new Criterianprice(dto);
//                case "sender" -> new C(dto);
                default -> new OrCriteria(criteria);
            };
        }
}
