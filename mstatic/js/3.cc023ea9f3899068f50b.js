webpackJsonp([3],{"3cXf":function(t,e,i){t.exports={default:i("VWiu"),__esModule:!0}},K3pp:function(t,e){},LnTv:function(t,e){},MdQ9:function(t,e){},VWiu:function(t,e,i){var a=i("DH3n"),s=a.JSON||(a.JSON={stringify:JSON.stringify});t.exports=function(t){return s.stringify.apply(s,arguments)}},a3Yh:function(t,e,i){"use strict";e.__esModule=!0;var a,s=i("liLe"),n=(a=s)&&a.__esModule?a:{default:a};e.default=function(t,e,i){return e in t?(0,n.default)(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}},aA3l:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i("IHPB"),s=i.n(a),n=i("3cXf"),l=i.n(n),o=i("a3Yh"),c=i.n(o),r=i("SXXC"),d=i.n(r),u=i("d8Q8"),v=i("pLux"),h=i("zf2T");function m(t){for(var e=[],i=0,a=(t=(t||0).toString().split("")).length-1;a>=0;a--)i++,e.unshift(t[a]),i%3||0==a||e.unshift(",");return e.join("")}function _(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return 0==e?Object(h.a)(t):e>0?Object(h.a)(t).times(Object(h.a)("1"+"0".repeat(e))):Object(h.a)(t).div(Object(h.a)("1"+"0".repeat(-e)))}function p(t){return _(t,-18)}var f=void 0,b={name:"pool",data:function(){var t;return t={isLp:!0,isApprove:!1,isEnterMargin:!1,isConnect:!1,noNetwork:!0,menuShow:!1,isslp:!0,isWrong:!1,addLiquiditySub:"",removeLiquiditySub:"",modalSharesNum:"",wallet:"0.0000",mytradingvolumecurrent:"--",walletbaseToken:"",networkText:"",address:"",noNetworkText:"",withdrawLiuqidity:"",depositLiquidity:"",minAddLiquidity:"",claimenetwork:"",money:"",unclaimed:"--",mytradingpencentage:"--",settimeout:"-- h -- m -- s",my_liquidity:"--",liquidity_margin:"",liquidity_volume:"",total_liquidity:"--",PerLiquidityShare:"--",maxRemovableShares:"",PoolnetworkText:"",pencentage:"--",maxBalance:"",balance:"",baseToken:"",shares:"",chainId:"",account:""},c()(t,"address",""),c()(t,"agement",""),c()(t,"symbol",""),c()(t,"apy","--"),c()(t,"poolName",""),c()(t,"totaltradingvolumecurrent",""),c()(t,"myHarvestDeriLp",""),c()(t,"claimed",""),c()(t,"unclaimed",""),c()(t,"myHarvestDeriLp",""),c()(t,"myHarvestDeriTrade",""),c()(t,"checkNetwork",""),c()(t,"claimenetwork",""),c()(t,"address_pool",""),c()(t,"checkedIndex","mining"),t},components:{menut:u.a},watch:{liquidity_margin:{handler:function(t,e){this.isEnterMargin=0!=t&&""!=t}},liquidity_volume:{handler:function(t,e){this.isEnterMargin=0!=t&&""!=t}}},mounted:function(){this.chainId=this.$route.params.chainId,this.baseToken=this.$route.params.baseToken,this.baseToken=this.baseToken,this.address_pool=this.$route.params.pooladdress;var t=sessionStorage.getItem("chainId"),e=this;setInterval(function(){e.current()},1e3),this.getPoolLiquidity(),this.getPoolNetWork(this.chainId),"0xc2EdaD668740f1aA35E4D8f227fB8E17dcA888Cd"==this.address_pool?(this.isslp=!1,this.getSlpPoolInfoApy(),t&&this.slpConnectWallet()):(this.getPoolInfoApy(this.chainId,this.address_pool),t&&this.connectWallet())},methods:{getPoolLiquidity:function(){var t=this;Object(v.p)(this.chainId,this.address_pool).then(function(e){t.total_liquidity=e.liquidity,t.symbol=e.symbol,"0xc2EdaD668740f1aA35E4D8f227fB8E17dcA888Cd"==t.address_pool?t.poolName=t.baseToken:t.poolName=e.symbol+"/"+t.baseToken})},hide:function(t){this.menuShow=t},removeMax:function(){this.liquidity_volume=this.maxRemovableShares},addMax:function(){this.liquidity_margin=this.maxBalance},reset:function(){this.getWalletBalance(this.agement),this.getSpecification(this.agement),this.getLiquidityInfo(this.agement),this.getUserInfoInPool(this.agement),this.getUserWalletBalence(this.chainId,this.account),this.getPoolInfoApy(this.chainId,this.address_pool),this.liquidity_margin="",this.liquidity_volume=""},slpreset:function(){this.getSlpPoolInfoApy(),this.getSlpLiquidityInfo(),this.getUserWalletBalence(this.chainId,this.account),this.liquidity_margin="",this.liquidity_volume=""},removeSlpLiquidity:function(){var t=this,e=d()("#removeslpbut"),i=this.liquidity_volume,a=this.maxRemovableShares,n=_(this.maxRemovableShares);if(_(i).gt(n))alert("Your current max removable shares are  "+a);else if(+i<=0||isNaN(i))alert("Invalid Liquidity!");else{var o=JSON.parse(l()(this.agement));o.push(i),this.disableButton(e),v.F.apply(void 0,s()(o)).then(function(i){i.success||alert("failure of transaction"),d()("#removeLiquidity").modal("hide"),t.enableButton(e),t.slpreset()})}},addSlpLiquidity:function(){var t=this,e=d()("#addslpbut"),i=this.liquidity_margin,a=_(i),n=_(this.maxBalance);if(a.gt(n))alert("not sufficient funds");else if(+i<=0||isNaN(i))alert("Please enter the correct format!");else{this.disableButton(e);var o=JSON.parse(l()(this.agement));o.push(i),v.d.apply(void 0,s()(o)).then(function(i){console.log(i),i.success||alert("failure of transaction"),d()("#addLiquidity").modal("hide"),t.enableButton(e),t.slpreset()})}},mintDToken:function(){var t=this,e=d()("#claimmyderi");0!=this.unclaimed?parseInt(Date.now()/1e3)%28800<1800?alert("Claiming DERI is disabled during first 30 minutes of each epoch"):(this.disableButton(e),Object(v.C)(this.chainId,this.account).then(function(i){if(console.log(i),t.enableButton(e),i.success){t.unclaimed=0,clearInterval(f);var a=t;f=setInterval(function(){a.getUserInfoAll(a.account)},18e4)}else alert("Claim failed")})):alert("Sorry,no DERI to claim yet")},tmintDToken:function(){var t=this,e=d()("#tradeclaimmyderi");0!=this.unclaimed?parseInt(Date.now()/1e3)%28800<1800?alert("Claiming DERI is disabled during first 30 minutes of each epoch"):(this.disableButton(e),Object(v.C)(this.chainId,this.account).then(function(i){if(t.enableButton(e),i.success){t.unclaimed=0,clearInterval(f);var a=t;f=setInterval(function(){a.getUserInfoAll(a.account)},18e4)}else alert("Claim failed")})):alert("Sorry,no DERI to claim yet")},addLiquidity:function(){var t=this,e=d()("#addbut"),i=this.liquidity_margin,a=_(i),n=_(this.maxBalance);if(a.gt(n))alert("not sufficient funds");else if(+i<+this.minAddLiquidity)alert("The input liquidity shall not be less than "+this.minAddLiquidity);else if(+i<=0||isNaN(i))alert("Please enter the correct format!");else{this.disableButton(e);var o=JSON.parse(l()(this.agement));o.push(i),v.c.apply(void 0,s()(o)).then(function(i){console.log(i),i.success||alert("failure of transaction"),d()("#addLiquidity").modal("hide"),t.enableButton(e),t.reset()})}},removeLiquidity:function(){var t=this,e=d()("#removebut"),i=this.liquidity_volume,a=+this.maxRemovableShares,n=_(this.maxRemovableShares),o=_(i),c=a-i;if(c<1&&0!=c)alert('Leaving staking balance of smaller than 1 is not allowed. Please click "MAX" to remove all if you are to withdraw all of your liquidity.');else if(o.gt(n))alert("Your current max removable shares are  "+a);else if(+i<=0||isNaN(i))alert("Invalid Liquidity!");else{var r=JSON.parse(l()(this.agement));r.push(i),this.disableButton(e),v.E.apply(void 0,s()(r)).then(function(i){i.success||alert("failure of transaction"),d()("#removeLiquidity").modal("hide"),t.enableButton(e),t.reset()})}},getWalletbaseToken:function(t){switch(t=String(t)){case"1":this.walletbaseToken="ETH",this.networkText="ETHEREUM";break;case"56":this.walletbaseToken="BNB",this.networkText="BSC";break;case"128":this.walletbaseToken="HT",this.networkText="HECO";break;case"3":this.walletbaseToken="ETH",this.networkText="ROPSTEN";break;case"42":this.walletbaseToken="ETH",this.networkText="KOVAN";break;case"97":this.walletbaseToken="BNB",this.networkText="BSC TESTNET";break;case"256":this.walletbaseToken="HT",this.networkText="HECO TESTNET";break;default:this.walletbaseToken=""}},getPoolNetWork:function(t){switch(t=String(t)){case"1":this.PoolnetworkText="ETHEREUM";break;case"56":this.PoolnetworkText="BSC";break;case"128":this.PoolnetworkText="HECO";break;case"3":this.PoolnetworkText="ROPSTEN";break;case"42":this.PoolnetworkText="KOVAN";break;case"97":this.PoolnetworkText="BSC TESTNET";break;case"256":this.PoolnetworkText="HECO TESTNET";break;default:this.PoolnetworkText=""}},getChainId:function(t){var e=void 0;switch(t=String(t)){case"1":e="ETHEREUM";break;case"56":e="BSC";break;case"128":e="HECO";break;case"3":e="ROPSTEN";break;case"42":e="KOVAN";break;case"97":e="BSC TESTNET";break;case"256":e="HECO TESTNET";break;default:e=""}return e},current:function(){var t=parseInt(Date.now()/1e3),e=28800*parseInt(t/28800)+28800-t,i=parseInt(e/3600),a=parseInt(e%3600/60),s=parseInt(e%60);this.settimeout=i+" h "+a+" m "+s+" s"},connectWallet:function(){var t=this;Object(v.f)().then(function(e){if(e.success){var i=e.chainId,a=v.a.get();if(i!=t.chainId){var s=Object(v.h)(a);return t.chainIdOfList=s.filter(function(t){return t.chainId==i}),console.log(t.chainIdOfList),t.chainIdOfList.length?(t.account=e.account,t.address=e.account.slice(0,6)+"..."+e.account.slice(e.account.length-4,e.account.length),t.isConnect=!0,t.isWrong=!0,t.getUserWalletBalence(i,t.account),t.getPoolNetWork(t.chainId),t.getPoolInfoApy(t.chainId,t.address_pool),t.getUserInfoAll(t.account),sessionStorage.setItem("chainId",t.chainId),void sessionStorage.setItem("pool",t.address_pool)):(t.noNetwork=!1,void(t.noNetworkText="Unsupported Chain ID "+i+"!"))}t.account=e.account,t.address=e.account.slice(0,6)+"..."+e.account.slice(e.account.length-4,e.account.length),t.isConnect=!0,t.agement=[t.chainId,t.address_pool,t.account];var n=t;t.isUnlocked(t.agement),t.getWalletBalance(t.agement),t.getSpecification(t.agement),t.getLiquidityInfo(t.agement),t.getUserInfoInPool(t.agement),t.getUserWalletBalence(t.chainId,t.account),t.getPoolInfoApy(t.chainId,t.address_pool),t.getUserInfoAll(t.account),t.getPoolNetWork(t.chainId),sessionStorage.setItem("chainId",t.chainId),sessionStorage.setItem("pool",t.address_pool),f=setInterval(function(){n.getUserInfoAll(n.account)},18e4)}})},slpConnectWallet:function(){var t=this;Object(v.f)().then(function(e){if(e.success){var i=e.chainId,a=v.a.get();if(i!=t.chainId){var s=Object(v.h)(a);return t.chainIdOfList=s.filter(function(e){return e.chainId==t.chainId}),t.chainIdOfList.length?(t.account=e.account,t.address=e.account.slice(0,6)+"..."+e.account.slice(e.account.length-4,e.account.length),t.isConnect=!0,t.isWrong=!0,t.getUserWalletBalence(i,t.account),t.getPoolNetWork(t.chainId),t.getPoolInfoApy(t.chainId,t.address_pool),t.getUserInfoAll(t.account),void sessionStorage.setItem("chainId",t.chainId)):(t.noNetwork=!1,void(t.noNetworkText="Unsupported Chain ID "+t.chainId+"!"))}t.account=e.account,t.address=e.account.slice(0,6)+"..."+e.account.slice(e.account.length-4,e.account.length),t.isConnect=!0,t.agement=[t.chainId,t.address_pool,t.account];var n=t;t.isSlpUnlocked(t.agement),t.getSlpWalletBalance(t.agement),t.getSlpLiquidityInfo(t.agement),t.getUserWalletBalence(t.chainId,t.account),t.getSlpPoolInfoApy(t.chainId,t.address_pool),t.getUserInfoAll(t.account),t.getPoolNetWork(t.chainId),sessionStorage.setItem("chainId",t.chainId),f=setInterval(function(){n.getUserInfoAll(n.account)},18e4)}})},getSlpPoolInfoApy:function(){var t=this;Object(v.s)("1","0xc2EdaD668740f1aA35E4D8f227fB8E17dcA888Cd").then(function(e){var i=.22008070161007/t.total_liquidity;i=(100*i).toFixed(2)+"%";var a=p(e.apy);a="0"==a?"--":(100*a).toFixed(2)+"%",t.apy=a+" + "+i})},getSlpLiquidityInfo:function(t){var e=this;v.r.apply(void 0,s()(t)).then(function(t){console.log(t),e.maxRemovableShares=t.shares;var i=+t.liquidity;e.stotal=i,e.my_liquidity=(+t.shares).toFixed(2);var a=e.my_liquidity;a=a.substring(a.indexOf(".")+1,a.indexOf(".")+3),e.removeMarginSub=a,e.modalSharesNum=m(parseInt(t.shares)),e.total_liquidity=i,e.PerLiquidityShare=1,e.PerLiquidityShare=e.PerLiquidityShare.toFixed(6),e.money=(t.shares*e.PerLiquidityShare).toFixed(2),e.baseToken="DERI-USDT SLP",e.pencentage=t.shares/t.liquidity*100,isNaN(e.pencentage)?e.pencentage="0%":"0"==t.shares?e.pencentage="0%":e.pencentage=e.pencentage.toFixed(2)+"%"})},getLiquidityInfo:function(t){var e=this;v.m.apply(void 0,s()(t)).then(function(t){console.log(t),e.maxRemovableShares=t.maxRemovableShares;var i=+t.poolLiquidity;e.stotal=i,e.my_liquidity=(+t.shares).toFixed(2);var a=(+t.shares).toFixed(2);if(a=a.substring(a.indexOf(".")+1,a.indexOf(".")+3),e.removeLiquiditySub=a,e.modalSharesNum=m(parseInt(t.shares)),e.total_liquidity=i,"NaN"==t.shareValue)e.PerLiquidityShare="--";else{var s=+t.shareValue;e.PerLiquidityShare=s.toFixed(6),e.money=(t.shares*e.PerLiquidityShare).toFixed(2)}e.pencentage=t.shares*t.shareValue/t.poolLiquidity*100,isNaN(e.pencentage)?e.pencentage="0%":"0"==t.shares?e.pencentage="0%":e.pencentage=e.pencentage.toFixed(2)+"%"})},getUserInfoInPool:function(t){var e=this;v.x.apply(void 0,s()(t)).then(function(t){e.mytradingvolumecurrent=p(t.volume1h)})},getWalletBalance:function(t){var e=this;v.z.apply(void 0,s()(t)).then(function(t){console.log("balance",t),e.maxBalance=t;var i=(+t).toFixed(2);i=i.substring(i.indexOf(".")+1,i.indexOf(".")+3),e.addLiquiditySub=i,e.balance=m(parseInt(t))})},getSlpWalletBalance:function(t){var e=this;v.t.apply(void 0,s()(t)).then(function(t){console.log("balance",t);var i=(+t).toFixed(6);i=i.substring(2,i.indexOf(".")+3),e.addLiquiditySub=i,e.balance=m(parseInt(t))})},getSpecification:function(t){var e=this;v.u.apply(void 0,s()(t)).then(function(t){console.log(t),e.minAddLiquidity=t.minAddLiquidity,e.baseToken=t.bbaseToken})},getUserWalletBalence:function(t,e){var i=this;console.log(t),Object(v.y)(t,e).then(function(e){i.wallet=(+e).toFixed(4),i.getWalletbaseToken(t)})},unlockSlp:function(){var t=this,e=d()("#Unlock");this.disableButton(e);var i=this.agement;v.I.apply(void 0,s()(i)).then(function(i){i.success?(d()("input").attr("disabled",!1),t.isApprove=!0):(d()("input").attr("disabled",!0),t.isApprove=!1),t.enableButton(e)})},isSlpUnlocked:function(t){var e=this;v.A.apply(void 0,s()(t)).then(function(t){t?(d()("input").attr("disabled",!1),e.isApprove=!0):(d()("input").attr("disabled",!0),e.isApprove=!1)})},isUnlocked:function(t){var e=this;v.B.apply(void 0,s()(t)).then(function(t){t?(d()("input").attr("disabled",!1),e.isApprove=!0):(d()("input").attr("disabled",!0),e.isApprove=!1)})},unlock:function(){var t=this,e=d()("#Unlock");this.disableButton(e);var i=this.agement;v.H.apply(void 0,s()(i)).then(function(i){i.success?(d()("input").attr("disabled",!1),t.isApprove=!0):(d()("input").attr("disabled",!0),t.isApprove=!1),t.enableButton(e)})},getPoolInfoApy:function(t,e){var i=this;Object(v.o)(t,e).then(function(t){var e=p(t.apy);i.totaltradingvolumecurrent=p(t.volume1h),i.apy="0"==e?"--":(100*e).toFixed(2)+"%"})},getUserInfoAll:function(t){var e=this;Object(v.w)(t).then(function(t){e.claimed=p(t.total).toFixed(2),console.log(t),t.valid?e.unclaimed=(+t.amount).toFixed(2):e.unclaimed=0,console.log(t),e.myHarvestDeriLp=(+t.lp).toFixed(2),e.myHarvestDeriTrade=(+t.trade).toFixed(2),e.getClaimeNetwork(t.chainId)})},getClaimeNetwork:function(t){switch(t=String(t)){case"1":this.claimenetwork="ETHEREUM";break;case"56":this.claimenetwork="BSC";break;case"128":this.claimenetwork="HECO";break;case"3":this.claimenetwork="ROPSTEN";break;case"42":this.claimenetwork="KOVAN";break;case"97":this.claimenetwork="BSC TESTNET";break;case"256":this.claimenetwork="HECO TESTNET";break;default:this.claimenetwork=""}},disableButton:function(t){t.find("span.spinner").show(),t.attr("disabled",!0)},enableButton:function(t){t.find("span.spinner").hide(),t.attr("disabled",!1)}}},g={render:function(){var t=this,e=this,a=e.$createElement,s=e._self._c||a;return s("div",{attrs:{id:"poolmining"}},[s("div",{staticClass:"modal fade",attrs:{id:"addLiquidity",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[s("div",{staticClass:"modal-dialog"},[s("div",{staticClass:"modal-content"},[e._m(0),e._v(" "),s("div",{staticClass:"modal-body"},[s("div",{staticClass:"margin_box_info"},[s("div",[e._v("Wallet Balance")]),e._v(" "),s("div",{staticClass:"money"},[s("span",[s("span",{staticClass:"bt_balance"},[e._v("\n                   "+e._s(e.balance)+"."),s("span",{staticClass:"modal_font"},[e._v(e._s(e.addLiquiditySub))])]),e._v(" "),s("br"),e._v(" "),s("span",{staticClass:"pBasetoken"},[e._v("\n                  "+e._s(e.baseToken)+"\n                ")])]),e._v(" "),s("span",{staticClass:"add"})]),e._v(" "),s("div",{staticClass:"enter_margin"},[s("div",{staticClass:"input_margin"},[s("div",{staticClass:"box"},[s("div",{directives:[{name:"show",rawName:"v-show",value:e.isEnterMargin,expression:"isEnterMargin"}],staticClass:"amount"},[e._v("LIQUIDITY")]),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.liquidity_margin,expression:"liquidity_margin"}],staticClass:"margin_value",attrs:{type:"number",placeholder:"LIQUIDITY"},domProps:{value:e.liquidity_margin},on:{input:function(t){t.target.composing||(e.liquidity_margin=t.target.value)}}})])]),e._v(" "),s("div",[e._v(e._s(e.baseToken))])]),e._v(" "),s("div",{staticClass:"max"},[e._v("\n              MAX: "),s("span",{staticClass:"max_num"},[e._v(e._s(this.maxBalance))]),e._v(" "),s("span",{staticClass:"max_btn_left",on:{click:e.addMax}},[e._v("ADD ALL")])]),e._v(" "),s("div",{staticClass:"add_margin_btn"},[e.isslp?s("button",{staticClass:"margin_btn",attrs:{id:"addbut"},on:{click:e.addLiquidity}},[s("span",{staticClass:"spinner spinner-border spinner-border-sm",staticStyle:{display:"none"},attrs:{role:"status","aria-hidden":"true"}}),e._v("\n              ADD\n            ")]):s("button",{staticClass:"margin_btn",attrs:{id:"addslpbut"},on:{click:e.addSlpLiquidity}},[s("span",{staticClass:"spinner spinner-border spinner-border-sm",staticStyle:{display:"none"},attrs:{role:"status","aria-hidden":"true"}}),e._v("\n              ADD\n            ")])])])])])])]),e._v(" "),s("div",{staticClass:"modal fade",attrs:{id:"removeLiquidity",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[s("div",{staticClass:"modal-dialog"},[s("div",{staticClass:"modal-content"},[e._m(1),e._v(" "),s("div",{staticClass:"modal-body"},[s("div",{staticClass:"margin_box_info"},[s("div",[e._v("Shares Available")]),e._v(" "),s("div",{staticClass:"money"},[s("span",[s("span",{staticClass:"bt_balance"},[e._v("\n                  "+e._s(e.modalSharesNum)+"."),s("span",{staticClass:"modal_font"},[e._v(e._s(e.removeLiquiditySub))])])]),e._v(" "),s("span",{staticClass:"remove"})]),e._v(" "),s("div",{staticClass:"enter_margin"},[s("div",{staticClass:"input_margin"},[s("div",{staticClass:"box"},[s("div",{directives:[{name:"show",rawName:"v-show",value:e.isEnterMargin,expression:"isEnterMargin"}],staticClass:"amount"},[e._v("\n                    LIQUIDITY SHARES\n                  ")]),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.liquidity_volume,expression:"liquidity_volume"}],staticClass:"margin_value",attrs:{type:"number",placeholder:"LIQUIDITY SHARES"},domProps:{value:e.liquidity_volume},on:{input:function(t){t.target.composing||(e.liquidity_volume=t.target.value)}}})])]),e._v(" "),s("div",[e._v("Shares")])]),e._v(" "),s("div",{staticClass:"max"},[e._v("\n              MAX REMOVEABLE:\n              "),s("span",{staticClass:"max_num"},[e._v(e._s(this.maxRemovableShares))]),e._v(" "),s("span",{staticClass:"max_btn_left",on:{click:e.removeMax}},[e._v("REMOVE ALL")])]),e._v(" "),s("div",{staticClass:"add_margin_btn"},[e.isslp?s("button",{staticClass:"margin_btn",attrs:{id:"removebut"},on:{click:e.removeLiquidity}},[s("span",{staticClass:"spinner spinner-border spinner-border-sm",staticStyle:{display:"none"},attrs:{role:"status","aria-hidden":"true"}}),e._v("\n                REMOVE\n              ")]):s("button",{staticClass:"margin_btn",attrs:{id:"removeslpbut"},on:{click:e.removeSlpLiquidity}},[s("span",{staticClass:"spinner spinner-border spinner-border-sm",staticStyle:{display:"none"},attrs:{role:"status","aria-hidden":"true"}}),e._v("\n                REMOVE\n              ")])])])])])])]),e._v(" "),s("div",{staticClass:"nav"},[s("img",{staticClass:"menu",attrs:{src:i("+HEJ"),alt:""},on:{click:function(){t.menuShow=!0}}}),e._v(" "),e._m(2)]),e._v(" "),s("div",{staticClass:"min",class:e.menuShow?"blur":""},[s("div",{staticClass:"middle"},[s("div",{staticClass:"pool_network"},[e._v(e._s(e.poolName)+" @ "+e._s(e.PoolnetworkText))]),e._v(" "),s("div",{staticClass:"check_trade_liquidity"},[s("div",{staticClass:"liquidity_mining",class:e.isLp?"action":"",on:{click:function(){t.isLp=!0}}},[e._v("\n          LIQUIDITY MINING\n        ")]),e._v(" "),s("div",{staticClass:"trade_mining",class:e.isLp?"":"action",on:{click:function(){t.isLp=!1}}},[e._v("\n          TRADING MINING\n        ")])]),e._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:e.isLp,expression:"isLp"}],staticClass:"liquidity_info"},[s("div",{staticClass:"claim_box"},[s("div",{staticClass:"odd title"},[e._v("\n            My Liquidity-Providing Harvest in Current Epoch\n          ")]),e._v(" "),s("div",{staticClass:"odd text"},[s("div",{staticClass:"text_title"},[e._v("Current Epoch Remaining Time")]),e._v(" "),s("div",{staticClass:"text_num"},[e._v(e._s(e.settimeout))])]),e._v(" "),s("div",{staticClass:"odd text"},[s("div",{staticClass:"text_title"},[e._v("\n              My Harvest in Current Epoch (estimated)\n            ")]),e._v(" "),s("div",{staticClass:"text_num"},[e._v(e._s(e.myHarvestDeriLp)+" DERI")])]),e._v(" "),s("div",{staticClass:"odd text"},[s("div",{staticClass:"text_title"},[e._v("Claimed DERI")]),e._v(" "),s("div",{staticClass:"text_num"},[e._v(e._s(e.claimed))])]),e._v(" "),e._m(3),e._v(" "),s("div",{staticClass:"odd text"},[s("div",{staticClass:"text_title"},[e._v("Unclaimed DERI")]),e._v(" "),s("div",{staticClass:"text_num"},[e._v(e._s(e.unclaimed))])]),e._v(" "),s("div",{staticClass:"odd claim_network"},[s("div",{staticClass:"text_title"},[e._v("\n              Your DERI is on "+e._s(e.claimenetwork)+" . Connect to\n              "+e._s(e.claimenetwork)+" to claim.\n            ")])]),e._v(" "),s("div",{staticClass:"claim_btn"},[e.isConnect?s("button",{staticClass:"claim",attrs:{id:"claimmyderi"},on:{click:e.mintDToken}},[s("span",{staticClass:"spinner spinner-border spinner-border-sm",staticStyle:{display:"none"},attrs:{role:"status","aria-hidden":"true"}}),e._v("\n                CLAIM\n              ")]):s("div",[s("button",{staticClass:"btn  claim",on:{click:e.connectWallet}},[e._v("\n                  Connect Wallet\n                ")])])])]),e._v(" "),s("div",{staticClass:"liquidity_box"},[s("div",{staticClass:"odd title"},[e._v("Provide "+e._s(e.baseToken)+" to Earn DERI")]),e._v(" "),s("div",{staticClass:"odd text"},[s("div",{staticClass:"text_title"},[e._v("Pool Total Liquidity")]),e._v(" "),s("div",{staticClass:"text_num"},[e._v(e._s(e.total_liquidity)+" "+e._s(e.baseToken))])]),e._v(" "),s("div",{staticClass:"odd text"},[s("div",{staticClass:"text_title"},[e._v("APY")]),e._v(" "),s("div",{staticClass:"text_num"},[e._v(e._s(e.apy))])]),e._v(" "),s("div",{staticClass:"odd text"},[s("div",{staticClass:"text_title"},[e._v("Liquidity Share Value")]),e._v(" "),s("div",{staticClass:"text_num"},[e._v(e._s(e.PerLiquidityShare)+" "+e._s(e.baseToken))])]),e._v(" "),s("div",{staticClass:"odd text"},[s("div",{staticClass:"text_title"},[e._v("My Liquidity Pencentage")]),e._v(" "),s("div",{staticClass:"text_num"},[e._v(e._s(e.pencentage))])]),e._v(" "),s("div",{staticClass:"odd text"},[s("div",{staticClass:"text_title"},[e._v("Staked Balance")]),e._v(" "),s("div",{staticClass:"text_num"},[e._v("\n              "+e._s(e.my_liquidity)+" "),s("span",{staticStyle:{color:"#ffffff"}},[e._v("Shares")])])]),e._v(" "),s("div",{staticClass:"odd claim_network"},[s("div",{staticClass:"text_title money"},[e._v(e._s(e.money)+" "+e._s(e.baseToken))])]),e._v(" "),s("div",{staticClass:"liquidity_btn"},[e.isWrong?s("div",[s("button",{staticClass:"btn approve_btn",staticStyle:{color:"#e35061","font-family":"'Korolev'","font-weight":"400"},attrs:{disabled:""}},[e._v("\n                Wrong Network\n              ")])]):s("div",[e.isConnect?s("div",[e.isApprove?s("div",{staticClass:"add_remove_liquidity"},[s("button",{staticClass:"add_liquidity",attrs:{"data-toggle":"modal","data-target":"#addLiquidity"}},[e._v("\n                ADD LIQUIDITY\n              ")]),e._v(" "),s("button",{staticClass:"remove_liquidity",attrs:{"data-toggle":"modal","data-target":"#removeLiquidity"}},[e._v("\n                REMOVE LIQUIDITY\n              ")])]):s("div",{staticClass:"approve"},[e.isslp?s("button",{staticClass:"approve_btn",attrs:{id:"Unlock"},on:{click:e.unlock}},[s("span",{staticClass:"spinner spinner-border spinner-border-sm",staticStyle:{display:"none"},attrs:{role:"status","aria-hidden":"true"}}),e._v("\n                  APPROVE\n                ")]):s("button",{staticClass:"approve_btn",attrs:{id:"SlpUnlock"},on:{click:e.unlockSlp}},[s("span",{staticClass:"spinner spinner-border spinner-border-sm",staticStyle:{display:"none"},attrs:{role:"status","aria-hidden":"true"}}),e._v("\n                  APPROVE\n                ")])])]):s("div",[s("button",{staticClass:"btn  approve_btn",on:{click:e.connectWallet}},[e._v("\n                  Connect Wallet\n                ")])])])])])]),e._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:!e.isLp,expression:"!isLp"}],staticClass:"trade_info"},[s("div",{staticClass:"claim_box"},[s("div",{staticClass:"odd title"},[e._v("My Trading Harvest in Current Epoch")]),e._v(" "),s("div",{staticClass:"odd text"},[s("div",{staticClass:"text_title"},[e._v("\n              My Trading Harvest in Current Epoch (Est)\n            ")]),e._v(" "),s("div",{staticClass:"text_num"},[e._v(e._s(e.myHarvestDeriTrade)+" DERI")])]),e._v(" "),s("div",{staticClass:"odd text"},[s("div",{staticClass:"text_title"},[e._v("Claimed DERI")]),e._v(" "),s("div",{staticClass:"text_num"},[e._v(e._s(e.claimed))])]),e._v(" "),e._m(4),e._v(" "),e._m(5),e._v(" "),s("div",{staticClass:"odd text"},[s("div",{staticClass:"text_title"},[e._v("Unclaimed DERI")]),e._v(" "),s("div",{staticClass:"text_num"},[e._v(e._s(e.unclaimed))])]),e._v(" "),e._m(6),e._v(" "),s("div",{staticClass:"claim_btn"},[e.isConnect?s("button",{staticClass:"claim",attrs:{id:"tradeclaimmyderi"},on:{click:e.tmintDToken}},[s("span",{staticClass:"spinner spinner-border spinner-border-sm",staticStyle:{display:"none"},attrs:{role:"status","aria-hidden":"true"}}),e._v("\n                CLAIM\n              ")]):s("div",[s("button",{staticClass:"btn  claim",on:{click:e.connectWallet}},[e._v("\n                  Connect Wallet\n                ")])])])]),e._v(" "),s("div",{staticClass:"liquidity_box"},[s("div",{staticClass:"odd title"},[e._v("Trade to Earn DERI")]),e._v(" "),s("div",{staticClass:"odd text"},[s("div",{staticClass:"text_title"},[e._v("Total Trading Volume in Current Hour")]),e._v(" "),s("div",{staticClass:"text_num"},[e._v(e._s(e.totaltradingvolumecurrent))])]),e._v(" "),s("div",{staticClass:"odd text"},[s("div",{staticClass:"text_title"},[e._v("My Trading Volume in Current Hour")]),e._v(" "),s("div",{staticClass:"text_num"},[e._v(e._s(e.mytradingvolumecurrent))])]),e._v(" "),e._m(7),e._v(" "),e._m(8),e._v(" "),e._m(9),e._v(" "),s("div",{staticClass:"odd claim_network"}),e._v(" "),s("div",{staticClass:"claim_btn"},[s("router-link",{attrs:{to:"/lite"}},[s("button",{staticClass:"claim"},[e._v("TRADE")])])],1)])])])]),e._v(" "),s("div",{staticClass:"fixed",class:e.menuShow?"blur":""},[e.noNetwork?s("div",[e.isConnect?s("button",{staticClass:"connect"},[e._v("\n        "+e._s(e.wallet)+" "+e._s(e.walletbaseToken)+"\n        "),s("span",{staticClass:"address"},[e._v(e._s(e.address))])]):s("button",{staticClass:"connect",on:{click:e.connectWallet}},[e._v("\n        Connect Wallet\n      ")])]):s("div",[s("button",{staticClass:"connect noNetwork"},[e._v("\n        "+e._s(e.noNetworkText)+"\n      ")])])]),e._v(" "),s("div",{staticClass:"menu_left",class:e.menuShow?"anmint":""},[s("menut",{attrs:{checkedIndex:e.checkedIndex},on:{hide:e.hide}})],1)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"modal-header"},[e("div",{staticClass:"title"},[this._v("ADD LIQUIDITY")]),this._v(" "),e("div",{staticClass:"close",attrs:{"data-dismiss":"modal"}},[e("span",[this._v("×")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"modal-header"},[e("div",{staticClass:"title"},[this._v("REMOVE LIQUIDITY")]),this._v(" "),e("div",{staticClass:"close",attrs:{"data-dismiss":"modal"}},[e("span",[this._v("×")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"logo",attrs:{href:"https://deri.finance/"}},[e("img",{attrs:{src:i("+v4m"),alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"odd text"},[e("div",{staticClass:"text_title"}),this._v(" "),e("div",{staticClass:"text_num"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"odd text"},[e("div",{staticClass:"text_title"}),this._v(" "),e("div",{staticClass:"text_num"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"odd text"},[e("div",{staticClass:"text_title"}),this._v(" "),e("div",{staticClass:"text_num"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"odd claim_network"},[e("div",{staticClass:"text_title"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"odd text"},[e("div",{staticClass:"text_title"}),this._v(" "),e("div",{staticClass:"text_num"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"odd text"},[e("div",{staticClass:"text_title"}),this._v(" "),e("div",{staticClass:"text_num"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"odd text"},[e("div",{staticClass:"text_title"}),this._v(" "),e("div",{staticClass:"text_num"})])}]};var C=i("C7Lr")(b,g,!1,function(t){i("LnTv"),i("K3pp"),i("MdQ9")},"data-v-505cdd4a",null);e.default=C.exports}});