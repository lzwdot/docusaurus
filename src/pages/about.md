---
title: 关于
sidebar_position: 1
---
# 关于

lzw. 一个 web 开发者！欢迎交流，可通过以下方式联系我：

<div className="row">
  <div className="col col--6">
    <div className="card">
      <div className="card__image">
         <img 
            src={require('@site/src/pages/images/weixin-qrcode.jpg').default}
            style={{height:'100px'}}
            alt="微信"
          />
      </div>
      <div className="card__body">
        <p>微信</p>
      </div>
    </div>
  </div>
  <div className="col col--6">
    <div className="card">
      <div className="card__image">
        <img 
            src={require('@site/src/pages/images/mpweixin-qrcode.jpg').default}
            style={{height:'100px'}}
            alt="微信"
          />
      </div>
      <div className="card__body">
        <p>公众号</p>
      </div>
    </div>   
  </div>
</div>

---
import Comments from '../components/Comments'

<Comments {...{type:'comments'}}/>
 