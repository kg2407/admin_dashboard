import React from 'react'
import { ArrowDownward, ArrowUpward } from '@material-ui/icons'
import './featuredInfo.css'

export default function FeaturedInfo() {
    return (
        <div className="featured">
            <div className="featuredItem">
                <span className="featuredTitle">Revenue</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$3,179</span>  
                    <span className="featuredMoneyRate">-11.4 <ArrowDownward className="featuredIcon  negetive"/></span>   
                </div> 
                <span className="featuredSub">Compare to Last Month</span>   
            </div>

            <div className="featuredItem">
                <span className="featuredTitle">Sales</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$9,179</span>  
                    <span className="featuredMoneyRate">-1.4 <ArrowDownward className="featuredIcon negetive"/></span>   
                </div> 
                <span className="featuredSub">Compare to Last Month</span>   
            </div>

            <div className="featuredItem">
                <span className="featuredTitle">Cost</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$7,179</span>  
                    <span className="featuredMoneyRate">1.4 <ArrowUpward className="featuredIcon"/></span>   
                </div> 
                <span className="featuredSub">Compare to Last Month</span>   
            </div>   
        </div>
    )
}
