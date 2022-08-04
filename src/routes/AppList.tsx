import React from "react"
import json from "../assets/app/json.png"
import tencent from "../assets/app/tencent.png"
import hr from "../assets/app/hr.png"
import jira from "../assets/app/jira.png"
import aliyun from "../assets/app/aliyun.png"
import youdao from "../assets/app/youdao.png"
import gitlab from "../assets/app/gitLab.png"
import ye from "../assets/app/ye.png"
import dian from "../assets/app/dian.png"
import sanjiao from "../assets/app/sanjiao.png"
import m from "../assets/app/m.png"
import ss from "../assets/app/ss.png"
import oauth2 from "../assets/app/oauth2.png"
import l from "../assets/app/1.png"
import cas from "../assets/app/cas.png"
import jwt from "../assets/app/jwt.png"
import s from "../assets/app/s.png"
import o from "../assets/app/o.png"
import "../assets/less/applist.css"
export default function AppList(){
    return (
        <ul>
            <li><img src={json} alt="" /></li>
            <li><img src={tencent} alt="" /></li>
            <li><img src={hr} alt="" /></li>
            <li><img src={jira} alt="" /></li>
            <li><img src={aliyun} alt="" /></li>
            <li><img src={youdao} alt="" /></li>
            <li><img src={gitlab} alt="" /></li>
            <li><img src={ye} alt="" /></li>
            <li><img src={dian} alt="" /></li>
            <li><img src={sanjiao} alt="" /></li>
            <li><img src={m} alt="" /></li>
            <li><img src={ss} alt="" /></li>
            <li><img src={oauth2} alt="" /></li>
            <li><img src={l} alt="" /></li>
            <li><img src={cas} alt="" /></li>
            <li><img src={jwt} alt="" /></li>
            <li><img src={s} alt="" /></li>
            <li><img src={o} alt="" /></li>
        </ul>

    )
}