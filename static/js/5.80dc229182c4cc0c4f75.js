webpackJsonp([5],{RKsz:function(t,e){},a3Yh:function(t,e,i){"use strict";e.__esModule=!0;var a,s=i("liLe"),n=(a=s)&&a.__esModule?a:{default:a};e.default=function(t,e,i){return e in t?(0,n.default)(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}},aA3l:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i("IHPB"),s=i.n(a),n=i("3cXf"),l=i.n(n),o=i("a3Yh"),c=i.n(o),r=i("mzkE"),d=i("SXXC"),u=i.n(d),v=i("pLux"),h=i("zf2T");function _(t){for(var e=[],i=0,a=(t=(t||0).toString().split("")).length-1;a>=0;a--)i++,e.unshift(t[a]),i%3||0==a||e.unshift(",");return e.join("")}function p(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return 0==e?Object(h.a)(t):e>0?Object(h.a)(t).times(Object(h.a)("1"+"0".repeat(e))):Object(h.a)(t).div(Object(h.a)("1"+"0".repeat(-e)))}function m(t){return p(t,-18)}var f=void 0,b={name:"pool",data:function(){var t;return t={isLp:!0,isApprove:!1,isEnterMargin:!1,isConnect:!1,noNetwork:!0,checkNetwork:"",isslp:!1,isclp:!1,isnoslpandclp:!0,isWrong:!1,addLiquiditySub:"",removeLiquiditySub:"",modalSharesNum:"",wallet:"0.0000",mytradingvolumecurrent:"0",walletSymbol:"",networkText:"",address:"",noNetworkText:"",withdrawLiuqidity:"",depositLiquidity:"",minAddLiquidity:"",claimenetwork:"",money:"--",unclaimed:"--",mytradingpencentage:"--",settimeout:"-- h -- m -- s",my_liquidity:"--",liquidity_margin:"",liquidity_volume:"",total_liquidity:"--",PerLiquidityShare:"--",maxRemovableShares:"",PoolnetworkText:"",pencentage:"--",maxBalance:"",balance:"",shares:"",chainId:"",baseToken:"",account:""},c()(t,"address",""),c()(t,"agement",""),c()(t,"symbol",""),c()(t,"apy","--"),c()(t,"sushi_apy","--"),c()(t,"totaltradingvolumecurrent",""),c()(t,"claimed",""),c()(t,"unclaimed",""),c()(t,"poolName",""),c()(t,"myHarvestDeriLp",""),c()(t,"myHarvestDeriTrade",""),c()(t,"address_pool",""),c()(t,"claimChainId",""),c()(t,"nowChainId",""),t},components:{footers:r.a},watch:{liquidity_margin:{handler:function(t,e){this.isEnterMargin=0!=t&&""!=t}},liquidity_volume:{handler:function(t,e){this.isEnterMargin=0!=t&&""!=t}}},mounted:function(){this.chainId=this.$route.params.chainId,this.baseToken=this.$route.params.baseToken,this.baseToken=this.baseToken,this.address_pool=this.$route.params.pooladdress;var t=sessionStorage.getItem("chainId"),e=this;setInterval(function(){e.current()},1e3),this.getPoolNetWork(this.chainId),"0xc2EdaD668740f1aA35E4D8f227fB8E17dcA888Cd"==this.address_pool&&(this.isslp=!0,this.isnoslpandclp=!1,this.isclp=!1,t?this.slpConnectWallet():(this.getPoolLiquidity(),this.getSlpPoolInfoApy())),"0x4de2Ac273aD1BBe2F5C41f986d7b3cef8383Df98"==this.address_pool?(this.isslp=!1,this.isnoslpandclp=!1,this.isclp=!0,t?this.clpConnectWallet():(this.getPoolLiquidity(),this.getClpPoolInfoApy())):t?this.connectWallet():(this.getPoolInfoApy(this.chainId,this.address_pool),this.getPoolLiquidity())},methods:{getPoolLiquidity:function(){var t=this;Object(v.t)(this.chainId,this.address_pool).then(function(e){console.log(e),t.total_liquidity=e.liquidity,t.symbol=e.symbol,"0xc2EdaD668740f1aA35E4D8f227fB8E17dcA888Cd"==t.address_pool||"0x4de2Ac273aD1BBe2F5C41f986d7b3cef8383Df98"==t.address_pool?t.poolName=t.baseToken:t.poolName=e.symbol+"/"+t.baseToken})},removeMax:function(){this.liquidity_volume=this.maxRemovableShares},addMax:function(){this.liquidity_margin=this.maxBalance},reset:function(){this.getWalletBalance(this.agement),this.getSpecification(this.agement),this.getLiquidityInfo(this.agement),this.getUserInfoInPool(this.agement),this.getUserWalletBalance(this.chainId,this.account),this.getPoolInfoApy(this.chainId,this.address_pool),this.liquidity_margin="",this.liquidity_volume=""},slpreset:function(){this.getSlpPoolInfoApy(),this.getSlpLiquidityInfo(this.agement),this.getSlpWalletBalance(this.agement),this.getUserWalletBalance(this.chainId,this.account),this.liquidity_margin="",this.liquidity_volume=""},clpreset:function(){this.getClpPoolInfoApy(),this.getClpLiquidityInfo(this.agement),this.getClpWalletBalance(this.agement),this.getUserWalletBalance(this.chainId,this.account),this.liquidity_margin="",this.liquidity_volume=""},removeSlpLiquidity:function(){var t=this,e=u()("#removeslpbut"),i=this.liquidity_volume,a=this.maxRemovableShares,n=p(this.maxRemovableShares);if(p(i).gt(n))alert("Your current max removable shares are  "+a);else if(+i<=0||isNaN(i))alert("Invalid Liquidity!");else{var o=JSON.parse(l()(this.agement));o.push(i),this.disableButton(e),v.L.apply(void 0,s()(o)).then(function(i){console.log(i),i.success||alert("failure of transaction"),u()("#removeLiquidity").modal("hide"),t.enableButton(e),t.slpreset()})}},removeClpLiquidity:function(){var t=this,e=u()("#removeclpbut"),i=this.liquidity_volume,a=this.maxRemovableShares,n=p(this.maxRemovableShares);if(p(i).gt(n))alert("Your current max removable shares are  "+a);else if(+i<=0||isNaN(i))alert("Invalid Liquidity!");else{var o=JSON.parse(l()(this.agement));o.push(i),this.disableButton(e),v.J.apply(void 0,s()(o)).then(function(i){console.log(i),i.success||alert("failure of transaction"),u()("#removeLiquidity").modal("hide"),t.enableButton(e),t.clpreset()})}},addSlpLiquidity:function(){var t=this,e=u()("#addslpbut"),i=this.liquidity_margin,a=p(i),n=p(this.maxBalance);if(a.gt(n))alert("not sufficient funds");else if(+i<=0||isNaN(i))alert("Please enter the correct format!");else{this.disableButton(e);var o=JSON.parse(l()(this.agement));o.push(i),v.e.apply(void 0,s()(o)).then(function(i){console.log(i),i.success||alert("failure of transaction"),u()("#addLiquidity").modal("hide"),t.enableButton(e),t.slpreset()})}},addClpLiquidity:function(){var t=this,e=u()("#addclpbut"),i=this.liquidity_margin,a=p(i),n=p(this.maxBalance);if(a.gt(n))alert("not sufficient funds");else if(+i<=0||isNaN(i))alert("Please enter the correct format!");else{this.disableButton(e);var o=JSON.parse(l()(this.agement));o.push(i),v.c.apply(void 0,s()(o)).then(function(i){console.log(i),i.success||alert("failure of transaction"),u()("#addLiquidity").modal("hide"),t.enableButton(e),t.clpreset()})}},mintDToken:function(){var t=this,e=u()("#claimmyderi");0!=this.unclaimed?parseInt(Date.now()/1e3)%28800<1800?alert("Claiming DERI is disabled during first 30 minutes of each epoch"):this.nowChainId==this.claimChainId?(this.disableButton(e),console.log(this.agement),Object(v.H)(this.chainId,this.account).then(function(i){if(console.log(i),t.enableButton(e),i.success){t.unclaimed=0,clearInterval(f);var a=t;f=setInterval(function(){a.getUserInfoAll(a.account)},18e4)}else alert("Claim failed")})):alert("Your DERI is on "+this.claimenetwork+" . Connect to "+this.claimenetwork+" to claim."):alert("Sorry,no DERI to claim yet")},tmintDToken:function(){var t=this,e=u()("#tradeclaimmyderi");0!=this.unclaimed?parseInt(Date.now()/1e3)%28800<1800?alert("Claiming DERI is disabled during first 30 minutes of each epoch"):this.nowChainId==this.claimChainId?(this.disableButton(e),Object(v.H)(this.chainId,this.account).then(function(i){if(t.enableButton(e),i.success){t.unclaimed=0,clearInterval(f);var a=t;f=setInterval(function(){a.getUserInfoAll(a.account)},18e4)}else alert("Claim failed")})):alert("Your DERI is on "+this.claimenetwork+" . Connect to "+this.claimenetwork+" to claim."):alert("Sorry,no DERI to claim yet")},addLiquidity:function(){var t=this,e=u()("#addbut"),i=this.liquidity_margin,a=p(i),n=p(this.maxBalance);if(a.gt(n))alert("not sufficient funds");else if(+i<+this.minAddLiquidity)alert("The input liquidity shall not be less than "+this.minAddLiquidity);else if(+i<=0||isNaN(i))alert("Please enter the correct format!");else{this.disableButton(e);var o=JSON.parse(l()(this.agement));o.push(i),v.d.apply(void 0,s()(o)).then(function(i){console.log(i),i.success||alert("failure of transaction"),u()("#addLiquidity").modal("hide"),t.enableButton(e),t.reset()})}},removeLiquidity:function(){var t=this,e=u()("#removebut"),i=this.liquidity_volume,a=this.maxRemovableShares,n=a-i,o=p(this.maxRemovableShares),c=p(i);if(n<1&&0!=n)alert('Leaving staking balance of smaller than 1 is not allowed. Please click "MAX" to remove all if you are to withdraw all of your liquidity.');else if(c.gt(o))alert("Your current max removable shares are  "+a);else if(+i<=0||isNaN(i))alert("Invalid Liquidity!");else{var r=JSON.parse(l()(this.agement));r.push(i),this.disableButton(e),v.K.apply(void 0,s()(r)).then(function(i){console.log(i),i.success||alert("failure of transaction"),u()("#removeLiquidity").modal("hide"),t.enableButton(e),t.reset()})}},getWalletSymbol:function(t){switch(t=String(t)){case"1":this.walletSymbol="ETH",this.networkText="ETHEREUM";break;case"56":this.walletSymbol="BNB",this.networkText="BSC";break;case"128":this.walletSymbol="HT",this.networkText="HECO";break;case"3":this.walletSymbol="ETH",this.networkText="ROPSTEN";break;case"42":this.walletSymbol="ETH",this.networkText="KOVAN";break;case"97":this.walletSymbol="BNB",this.networkText="BSC TESTNET";break;case"256":this.walletSymbol="HT",this.networkText="HECO TESTNET";break;default:this.walletSymbol=""}},getPoolNetWork:function(t){switch(t=String(t)){case"1":this.PoolnetworkText="ETHEREUM";break;case"56":this.PoolnetworkText="BSC";break;case"128":this.PoolnetworkText="HECO";break;case"3":this.PoolnetworkText="ROPSTEN";break;case"42":this.PoolnetworkText="KOVAN";break;case"97":this.PoolnetworkText="BSC TESTNET";break;case"256":this.PoolnetworkText="HECO TESTNET";break;default:this.PoolnetworkText=""}},getChainId:function(t){var e=void 0;switch(t=String(t)){case"1":e="ETHEREUM";break;case"56":e="BSC";break;case"128":e="HECO";break;case"3":e="ROPSTEN";break;case"42":e="KOVAN";break;case"97":e="BSC TESTNET";break;case"256":e="HECO TESTNET";break;default:e=""}return e},current:function(){var t=parseInt(Date.now()/1e3),e=28800*parseInt(t/28800)+28800-t,i=parseInt(e/3600),a=parseInt(e%3600/60),s=parseInt(e%60);this.settimeout=i+" h "+a+" m "+s+" s"},connectWallet:function(){var t=this;Object(v.g)().then(function(e){if(e.success){t.nowChainId=e.chainId;var i=e.chainId,a=v.a.get();if(i!=t.chainId){var s=Object(v.l)(a);return t.chainIdOfList=s.filter(function(t){return t.chainId==i}),t.chainIdOfList.length?(t.account=e.account,t.address=e.account.slice(0,6)+"..."+e.account.slice(e.account.length-4,e.account.length),t.isConnect=!0,sessionStorage.setItem("chainId",t.chainId),sessionStorage.setItem("pool",t.address_pool),t.isWrong=!0,t.getUserWalletBalance(i,t.account),t.getPoolNetWork(t.chainId),t.getPoolLiquidity(),t.getPoolInfoApy(t.chainId,t.address_pool),void t.getUserInfoAll(t.account)):(t.noNetwork=!1,void(t.noNetworkText="Unsupported Chain ID "+i+"!"))}t.account=e.account,t.address=e.account.slice(0,6)+"..."+e.account.slice(e.account.length-4,e.account.length),t.isConnect=!0,t.agement=[t.chainId,t.address_pool,t.account],t.isUnlocked(t.agement),t.getWalletBalance(t.agement),t.getSpecification(t.agement),t.getLiquidityInfo(t.agement),t.getUserInfoInPool(t.agement),t.getUserWalletBalance(t.chainId,t.account),t.getPoolNetWork(t.chainId),t.getPoolInfoApy(t.chainId,t.address_pool),t.getUserInfoAll(t.account),sessionStorage.setItem("chainId",t.chainId),sessionStorage.setItem("pool",t.address_pool);var n=t;f=setInterval(function(){n.getUserInfoAll(n.account)},18e4)}})},slpConnectWallet:function(){var t=this;Object(v.g)().then(function(e){if(e.success){t.nowChainId=e.chainId;var i=e.chainId,a=v.a.get();if(t.poolName=t.baseToken,i!=t.chainId){var s=Object(v.l)(a);return t.chainIdOfList=s.filter(function(e){return e.chainId==t.chainId}),t.chainIdOfList.length?(t.account=e.account,t.address=e.account.slice(0,6)+"..."+e.account.slice(e.account.length-4,e.account.length),t.isConnect=!0,sessionStorage.setItem("chainId",t.chainId),t.isWrong=!0,t.getUserWalletBalance(i,t.account),t.getPoolNetWork(t.chainId),t.getPoolLiquidity(),t.getPoolInfoApy(t.chainId,t.address_pool),void t.getUserInfoAll(t.account)):(t.noNetwork=!1,void(t.noNetworkText="Unsupported Chain ID "+t.chainId+"!"))}t.account=e.account,t.address=e.account.slice(0,6)+"..."+e.account.slice(e.account.length-4,e.account.length),t.isConnect=!0,t.agement=[t.chainId,t.address_pool,t.account];var n=t;t.isSlpUnlocked(t.agement),t.getSlpWalletBalance(t.agement),t.getSlpLiquidityInfo(t.agement),t.getUserWalletBalance(t.chainId,t.account),t.getPoolNetWork(t.chainId),t.getSlpPoolInfoApy(t.chainId,t.address_pool),t.getUserInfoAll(t.account),sessionStorage.setItem("chainId",t.chainId),f=setInterval(function(){n.getUserInfoAll(n.account)},18e4)}})},clpConnectWallet:function(){var t=this;Object(v.g)().then(function(e){if(e.success){t.nowChainId=e.chainId;var i=e.chainId;t.poolName=t.baseToken;var a=v.a.get();if(i!=t.chainId){var s=Object(v.l)(a);return t.chainIdOfList=s.filter(function(e){return e.chainId==t.chainId}),t.chainIdOfList.length?(t.account=e.account,t.address=e.account.slice(0,6)+"..."+e.account.slice(e.account.length-4,e.account.length),t.isConnect=!0,sessionStorage.setItem("chainId",t.chainId),t.isWrong=!0,t.getUserWalletBalance(i,t.account),t.getPoolNetWork(t.chainId),t.getPoolInfoApy(t.chainId,t.address_pool),t.getPoolLiquidity(),void t.getUserInfoAll(t.account)):(t.noNetwork=!1,void(t.noNetworkText="Unsupported Chain ID "+t.chainId+"!"))}t.account=e.account,t.address=e.account.slice(0,6)+"..."+e.account.slice(e.account.length-4,e.account.length),t.isConnect=!0,t.agement=[t.chainId,t.address_pool,t.account];var n=t;t.isClpUnlocked(t.agement),t.getClpWalletBalance(t.agement),t.getClpLiquidityInfo(t.agement),t.getUserWalletBalance(t.chainId,t.account),t.getPoolNetWork(t.chainId),t.getClpPoolInfoApy(t.chainId,t.address_pool),t.getUserInfoAll(t.account),sessionStorage.setItem("chainId",t.chainId),f=setInterval(function(){n.getUserInfoAll(n.account)},18e4)}})},getClpLiquidityInfo:function(t){var e=this;v.i.apply(void 0,s()(t)).then(function(t){console.log(t),e.maxRemovableShares=t.shares;var i=+t.poolLiquidity;e.stotal=i,e.my_liquidity=(+t.shares).toFixed(2);var a=t.shares;console.log(a),a=a.substring(a.indexOf(".")+1,a.indexOf(".")+3),console.log(a),e.removeLiquiditySub=a,e.modalSharesNum=_(parseInt(t.shares)),e.total_liquidity=i.toFixed(6),e.PerLiquidityShare=1,e.PerLiquidityShare=e.PerLiquidityShare.toFixed(6),e.money=t.shares*e.PerLiquidityShare,e.baseToken="CAKE-LP",e.pencentage=t.shares/t.poolLiquidity*100,isNaN(e.pencentage)?e.pencentage="0%":"0"==t.shares?e.pencentage="0%":e.pencentage=e.pencentage.toFixed(2)+"%"})},getClpPoolInfoApy:function(){var t=this;Object(v.j)("56","0x4de2Ac273aD1BBe2F5C41f986d7b3cef8383Df98").then(function(e){console.log(e);var i=m(e.apy);t.totaltradingvolumecurrent=m(e.volume1h),t.apy="0"==i?"--":(100*i).toFixed(2)+"%"})},getClpWalletBalance:function(t){var e=this;v.k.apply(void 0,s()(t)).then(function(t){e.maxBalance=t;var i=(+t).toFixed(2);i=i.substring(i.indexOf(".")+1,i.indexOf(".")+3),e.addLiquiditySub=i,e.balance=_(parseInt(t))})},getSlpPoolInfoApy:function(){var t=this;Object(v.w)("1","0xc2EdaD668740f1aA35E4D8f227fB8E17dcA888Cd").then(function(e){var i=.22008070161007/t.total_liquidity;i=(100*i).toFixed(2)+"%";var a=m(e.apy);a="0"==a?"--":(100*a).toFixed(2)+"%",t.apy=a,t.sushi_apy=i})},getSlpLiquidityInfo:function(t){var e=this;v.v.apply(void 0,s()(t)).then(function(t){console.log(t),e.maxRemovableShares=t.shares;var i=+t.liquidity;e.stotal=i,e.my_liquidity=t.shares;var a=e.my_liquidity;a=a.substring(a.indexOf(".")+1,a.indexOf(".")+3),e.removeLiquiditySub=a,e.modalSharesNum=_(parseInt(t.shares)),e.total_liquidity=i,e.PerLiquidityShare=1,e.PerLiquidityShare=e.PerLiquidityShare.toFixed(6),e.money=t.shares*e.PerLiquidityShare,e.baseToken="DERI-USDT SLP",e.pencentage=t.shares/t.liquidity*100,isNaN(e.pencentage)?e.pencentage="0%":"0"==t.shares?e.pencentage="0%":e.pencentage=e.pencentage.toFixed(2)+"%"})},getSlpWalletBalance:function(t){var e=this;v.x.apply(void 0,s()(t)).then(function(t){e.maxBalance=t;var i=(+t).toFixed(6);i=i.substring(i.indexOf(".")+1,i.indexOf(".")+3),e.addLiquiditySub=i,e.balance=_(parseInt(t))})},getLiquidityInfo:function(t){var e=this;v.q.apply(void 0,s()(t)).then(function(t){console.log(t),e.maxRemovableShares=t.maxRemovableShares;var i=+t.poolLiquidity;e.stotal=i,e.my_liquidity=(+t.shares).toFixed(2);var a=(+t.shares).toFixed(2);if(a=a.substring(a.indexOf(".")+1,a.indexOf(".")+3),e.removeLiquiditySub=a,e.modalSharesNum=_(parseInt(t.shares)),e.total_liquidity=i,"NaN"==t.shareValue)e.PerLiquidityShare="--";else{var s=+t.shareValue;e.PerLiquidityShare=s.toFixed(6),e.money=(t.shares*e.PerLiquidityShare).toFixed(2)}e.pencentage=t.shares*t.shareValue/t.poolLiquidity*100,isNaN(e.pencentage)?e.pencentage="0%":"0"==t.shares?e.pencentage="0%":e.pencentage=e.pencentage.toFixed(2)+"%"})},getUserInfoInPool:function(t){var e=this;v.B.apply(void 0,s()(t)).then(function(t){console.log("mytradingvolumecurrent",t),e.mytradingvolumecurrent=m(t.volume1h)})},getWalletBalance:function(t){var e=this;v.D.apply(void 0,s()(t)).then(function(t){console.log("balance",t),e.maxBalance=t;var i=(+t).toFixed(2);i=i.substring(i.indexOf(".")+1,i.indexOf(".")+3),e.addLiquiditySub=i,e.balance=_(parseInt(t))})},getSpecification:function(t){var e=this;v.y.apply(void 0,s()(t)).then(function(t){console.log(t),e.minAddLiquidity=t.minAddLiquidity,e.baseToken=t.bSymbol,e.poolName=t.symbol+"/"+e.baseToken})},getUserWalletBalance:function(t,e){var i=this;console.log(t),Object(v.C)(t,e).then(function(e){i.wallet=(+e).toFixed(4),i.getWalletSymbol(t)})},isUnlocked:function(t){var e=this;console.log("isUnlocked","start"),v.G.apply(void 0,s()(t)).then(function(t){console.log("isUnlocked",t),t?(u()("input").attr("disabled",!1),e.isApprove=!0):(u()("input").attr("disabled",!0),e.isApprove=!1)}).catch(function(t){console.log(t)})},unlockSlp:function(){var t=this,e=u()("#SlpUnlock");this.disableButton(e);var i=this.agement;v.P.apply(void 0,s()(i)).then(function(i){i.success?(u()("input").attr("disabled",!1),t.isApprove=!0):(u()("input").attr("disabled",!0),t.isApprove=!1),t.enableButton(e)})},unlock:function(){var t=this,e=u()("#Unlock");this.disableButton(e);var i=this.agement;v.N.apply(void 0,s()(i)).then(function(i){i.success?(u()("input").attr("disabled",!1),t.isApprove=!0):(u()("input").attr("disabled",!0),t.isApprove=!1),t.enableButton(e)})},unlockClp:function(){var t=this,e=u()("#clpUnlock");this.disableButton(e);var i=this.agement;v.O.apply(void 0,s()(i)).then(function(i){i.success?(u()("input").attr("disabled",!1),t.isApprove=!0):(u()("input").attr("disabled",!0),t.isApprove=!1),t.enableButton(e)})},isSlpUnlocked:function(t){var e=this;v.F.apply(void 0,s()(t)).then(function(t){t?(u()("input").attr("disabled",!1),e.isApprove=!0):(u()("input").attr("disabled",!0),e.isApprove=!1)})},isClpUnlocked:function(t){var e=this;v.E.apply(void 0,s()(t)).then(function(t){t?(u()("input").attr("disabled",!1),e.isApprove=!0):(u()("input").attr("disabled",!0),e.isApprove=!1)})},getPoolInfoApy:function(t,e){var i=this;console.log(e),Object(v.s)(t,e).then(function(t){console.log("getPoolInfoApy",t);var e=m(t.apy);i.totaltradingvolumecurrent=m(t.volume1h),i.apy="0"==e?"--":(100*e).toFixed(2)+"%"})},getUserInfoAll:function(t){var e=this;Object(v.A)(t).then(function(t){e.claimed=m(t.total).toFixed(2),t.valid?e.unclaimed=(+t.amount).toFixed(2):e.unclaimed=0,e.myHarvestDeriLp=(+t.lp).toFixed(2),e.myHarvestDeriTrade=(+t.trade).toFixed(2),e.claimChainId=t.chainId,e.getClaimeNetwork(t.chainId)})},getClaimeNetwork:function(t){switch(t){case"1":this.claimenetwork="ETHEREUM";break;case"56":this.claimenetwork="BSC";break;case"128":this.claimenetwork="HECO";break;case"3":this.claimenetwork="ROPSTEN";break;case"42":this.claimenetwork="KOVAN";break;case"97":this.claimenetwork="BSC TESTNET";break;case"256":this.claimenetwork="HECO TESTNET";break;default:this.claimenetwork=""}},disableButton:function(t){t.find("span.spinner").show(),t.attr("disabled",!0)},enableButton:function(t){t.find("span.spinner").hide(),t.attr("disabled",!1)}}},g={render:function(){var t=this,e=this,i=e.$createElement,a=e._self._c||i;return a("div",{attrs:{id:"pool"}},[a("div",{staticClass:"modal fade",attrs:{id:"addLiquidity",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog"},[a("div",{staticClass:"modal-content"},[e._m(0),e._v(" "),a("div",{staticClass:"modal-body"},[a("div",{staticClass:"margin_box_info"},[a("div",[e._v("Wallet Balance")]),e._v(" "),a("div",{staticClass:"money"},[a("span",[a("span",{staticClass:"bt_balance"},[e._v("\n                  "+e._s(e.balance)+"."),a("span",{staticStyle:{"font-size":"12px"}},[e._v(e._s(e.addLiquiditySub))])]),e._v(" "),a("br"),e._v(" "),a("span",{staticStyle:{"font-size":"14px",position:"relative",top:"-7px"}},[e._v(e._s(e.baseToken))])]),e._v(" "),a("span",{staticClass:"add"})]),e._v(" "),a("div",{staticClass:"enter_margin"},[a("div",{staticClass:"input_margin"},[a("div",{staticClass:"box"},[a("div",{directives:[{name:"show",rawName:"v-show",value:e.isEnterMargin,expression:"isEnterMargin"}],staticClass:"amount"},[e._v("LIQUIDITY")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.liquidity_margin,expression:"liquidity_margin"}],staticClass:"margin_value",attrs:{type:"number",placeholder:"LIQUIDITY"},domProps:{value:e.liquidity_margin},on:{input:function(t){t.target.composing||(e.liquidity_margin=t.target.value)}}})])]),e._v(" "),a("div",[e._v(e._s(e.baseToken))])]),e._v(" "),a("div",{staticClass:"max"},[e._v("\n              MAX: "),a("span",{staticClass:"max_num"},[e._v(e._s(this.maxBalance))]),e._v(" "),a("span",{staticClass:"max_btn_left",on:{click:e.addMax}},[e._v("ADD ALL")])]),e._v(" "),a("div",{staticClass:"add_margin_btn"},[e.isnoslpandclp?a("button",{staticClass:"margin_btn",attrs:{id:"addbut"},on:{click:e.addLiquidity}},[a("span",{staticClass:"spinner spinner-border spinner-border-sm",staticStyle:{display:"none"},attrs:{role:"status","aria-hidden":"true"}}),e._v("\n                ADD\n              ")]):e._e(),e._v(" "),e.isslp?a("button",{staticClass:"margin_btn",attrs:{id:"addslpbut"},on:{click:e.addSlpLiquidity}},[a("span",{staticClass:"spinner spinner-border spinner-border-sm",staticStyle:{display:"none"},attrs:{role:"status","aria-hidden":"true"}}),e._v("\n                ADD\n              ")]):e._e(),e._v(" "),e.isclp?a("button",{staticClass:"margin_btn",attrs:{id:"addclpbut"},on:{click:e.addClpLiquidity}},[a("span",{staticClass:"spinner spinner-border spinner-border-sm",staticStyle:{display:"none"},attrs:{role:"status","aria-hidden":"true"}}),e._v("\n                ADD\n              ")]):e._e()])])])])])]),e._v(" "),a("div",{staticClass:"modal fade",attrs:{id:"removeLiquidity",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog"},[a("div",{staticClass:"modal-content"},[e._m(1),e._v(" "),a("div",{staticClass:"modal-body"},[a("div",{staticClass:"margin_box_info"},[a("div",[e._v("Shares Available")]),e._v(" "),a("div",{staticClass:"money"},[a("span",[a("span",{staticClass:"bt_balance"},[e._v("\n                "+e._s(e.modalSharesNum)+"."),a("span",{staticStyle:{"font-size":"12px"}},[e._v(e._s(e.removeLiquiditySub))])])]),e._v(" "),a("span",{staticClass:"remove"})]),e._v(" "),a("div",{staticClass:"enter_margin"},[a("div",{staticClass:"input_margin"},[a("div",{staticClass:"box"},[a("div",{directives:[{name:"show",rawName:"v-show",value:e.isEnterMargin,expression:"isEnterMargin"}],staticClass:"amount"},[e._v("LIQUIDITY SHARES")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.liquidity_volume,expression:"liquidity_volume"}],staticClass:"margin_value",attrs:{type:"number",placeholder:"LIQUIDITY SHARES"},domProps:{value:e.liquidity_volume},on:{input:function(t){t.target.composing||(e.liquidity_volume=t.target.value)}}})])]),e._v(" "),a("div",[e._v("Shares")])]),e._v(" "),a("div",{staticClass:"max"},[e._v("\n              MAX REMOVABLE: "),a("span",{staticClass:"max_num"},[e._v(e._s(this.maxRemovableShares))]),e._v(" "),a("span",{staticClass:"max_btn_left",on:{click:e.removeMax}},[e._v("REMOVE ALL")])]),e._v(" "),a("div",{staticClass:"add_margin_btn remv"},[e.isnoslpandclp?a("button",{staticClass:"margin_btn",attrs:{id:"removebut"},on:{click:e.removeLiquidity}},[a("span",{staticClass:"spinner spinner-border spinner-border-sm",staticStyle:{display:"none"},attrs:{role:"status","aria-hidden":"true"}}),e._v("\n                REMOVE\n              ")]):e._e(),e._v(" "),e.isslp?a("button",{staticClass:"margin_btn",attrs:{id:"removeslpbut"},on:{click:e.removeSlpLiquidity}},[a("span",{staticClass:"spinner spinner-border spinner-border-sm",staticStyle:{display:"none"},attrs:{role:"status","aria-hidden":"true"}}),e._v("\n                REMOVE\n              ")]):e._e(),e._v(" "),e.isclp?a("button",{staticClass:"margin_btn",attrs:{id:"removeclpbut"},on:{click:e.removeClpLiquidity}},[a("span",{staticClass:"spinner spinner-border spinner-border-sm",staticStyle:{display:"none"},attrs:{role:"status","aria-hidden":"true"}}),e._v("\n                REMOVE\n              ")]):e._e()])])])])])]),e._v(" "),a("div",{staticClass:"nav"},[a("div",{staticClass:"nav_mean"},[e._m(2),e._v(" "),a("ul",{staticClass:"mean"},[a("li",{staticClass:"menu_li"},[a("router-link",{staticStyle:{color:"#FFFFFF"},attrs:{to:"/mining"}},[e._v("\n            Mining\n          ")])],1),e._v(" "),a("li",{staticClass:"menu_li"},[a("router-link",{attrs:{to:"/lite"}},[e._v("\n            Trade\n          ")])],1),e._v(" "),e._m(3),e._v(" "),e._m(4),e._v(" "),a("li",{staticClass:"menu_li ref"},[a("a",{attrs:{href:"https://docs.deri.finance/"}},[e._v("Docs")]),e._v(" "),a("svg",{staticClass:"Zi Zi--ArrowDown ContentItem-arrowIcon",attrs:{fill:"currentColor",viewBox:"0 0 24 24",width:"24",height:"24"}},[a("path",{attrs:{d:"M12 13L8.285 9.218a.758.758 0 0 0-1.064 0 .738.738 0 0 0 0 1.052l4.249 4.512a.758.758 0 0 0 1.064 0l4.246-4.512a.738.738 0 0 0 0-1.052.757.757 0 0 0-1.063 0L12.002 13z","fill-rule":"evenodd"}})]),e._v(" "),e._m(5)])]),e._v(" "),a("div",{staticClass:"connect"},[a("div",{staticClass:"network_text_logo"},[a("i",{class:e.walletSymbol})]),e._v(" "),a("span",{staticClass:"logo_text"},[e._v(e._s(e.networkText))]),e._v(" "),e.noNetwork?a("div",{staticClass:"bg_btn"},[e.isConnect?a("button",{staticClass:"nav_btn"},[e._v("\n            "+e._s(e.wallet)+" "+e._s(e.walletSymbol)+" "),a("span",{staticClass:"address"},[e._v(e._s(e.address))])]):a("div",[e.isnoslpandclp?a("button",{staticClass:"nav_btn connect_btn",on:{click:e.connectWallet}},[e._v("\n              Connect Wallet\n            ")]):e._e(),e._v(" "),e.isslp?a("button",{staticClass:"nav_btn connect_btn",on:{click:e.slpConnectWallet}},[e._v("\n              Connect Wallet\n            ")]):e._e(),e._v(" "),e.isclp?a("button",{staticClass:"nav_btn connect_btn",on:{click:e.clpConnectWallet}},[e._v("\n              Connect Wallet\n            ")]):e._e()])]):a("div",[a("button",{staticClass:"nav_btn noNetwork"},[e._v("\n            "+e._s(e.noNetworkText)+"\n          ")])])])])]),e._v(" "),a("div",{staticClass:"margin_top"}),e._v(" "),a("div",{staticClass:"middle"},[a("div",{staticClass:"mining_info"},[a("div",{staticClass:"pool_header"},[a("div",{staticClass:"pool_network"},[e._v("\n          "+e._s(e.poolName)+" @ "+e._s(e.PoolnetworkText)+"\n        ")]),e._v(" "),a("div",{staticClass:"check_trade_liquidity"},[a("div",{staticClass:"liquidity_mining",class:e.isLp?"action":"",on:{click:function(){t.isLp=!0}}},[e._v("\n            LIUQIDITY MINING\n          ")]),e._v(" "),a("div",{staticClass:"trade_mining",class:e.isLp?"":"action",on:{click:function(){t.isLp=!1}}},[e._v("\n            TRADING MINING\n          ")])])]),e._v(" "),a("div",{staticClass:"pool_info"},[a("div",{directives:[{name:"show",rawName:"v-show",value:e.isLp,expression:"isLp"}],staticClass:"liquidity_info"},[a("div",{staticClass:"claim_box"},[a("div",{staticClass:"odd title"},[e._v("My Liquidity-Providing Harvest in Current Epoch")]),e._v(" "),a("div",{staticClass:"odd text"},[a("div",{staticClass:"text_title"},[e._v("Current Epoch Remaining Time")]),e._v(" "),a("div",{staticClass:"text_num"},[e._v(e._s(e.settimeout))])]),e._v(" "),a("div",{staticClass:"odd text"},[a("div",{staticClass:"text_title"},[e._v("My Harvest in Current Epoch (estimated)")]),e._v(" "),a("div",{staticClass:"text_num"},[e._v(e._s(e.myHarvestDeriLp)+" DERI")])]),e._v(" "),a("div",{staticClass:"odd text"},[a("div",{staticClass:"text_title"},[e._v("Claimed DERI")]),e._v(" "),a("div",{staticClass:"text_num"},[e._v(e._s(e.claimed))])]),e._v(" "),e._m(6),e._v(" "),a("div",{staticClass:"odd text"},[a("div",{staticClass:"text_title"},[e._v("Unclaimed DERI")]),e._v(" "),a("div",{staticClass:"text_num"},[e._v(e._s(e.unclaimed))])]),e._v(" "),a("div",{staticClass:"odd claim_network"},[a("div",{staticClass:"text_title"},[e._v("Your DERI is on "+e._s(e.claimenetwork)+" . Connect to "+e._s(e.claimenetwork)+" to claim.\n              ")])]),e._v(" "),a("div",{staticClass:"claim_btn"},[e.isConnect?a("button",{staticClass:"claim",attrs:{id:"claimmyderi"},on:{click:e.mintDToken}},[a("span",{staticClass:"spinner spinner-border spinner-border-sm",staticStyle:{display:"none"},attrs:{role:"status","aria-hidden":"true"}}),e._v("\n                CLAIM\n              ")]):a("div",[e.isnoslpandclp?a("button",{staticClass:"btn  claim",on:{click:e.connectWallet}},[e._v("\n                  Connect Wallet\n                ")]):e._e(),e._v(" "),e.isslp?a("button",{staticClass:"btn  claim",on:{click:e.slpConnectWallet}},[e._v("\n                  Connect Wallet\n                ")]):e._e(),e._v(" "),e.isclp?a("button",{staticClass:"btn  claim",on:{click:e.clpConnectWallet}},[e._v("\n                  Connect Wallet\n                ")]):e._e()])])]),e._v(" "),a("div",{staticClass:"liquidity_box"},[a("div",{staticClass:"odd title"},[e._v("Provide "+e._s(e.baseToken)+" to Earn DERI")]),e._v(" "),a("div",{staticClass:"odd text"},[a("div",{staticClass:"text_title"},[e._v("Pool Total Liquidity")]),e._v(" "),a("div",{staticClass:"text_num"},[e._v(" "+e._s(e.total_liquidity)+" "+e._s(e.baseToken))])]),e._v(" "),a("div",{staticClass:"odd text"},[a("div",{staticClass:"text_title"},[e._v("APY")]),e._v(" "),a("div",{staticClass:"text_num"},[a("span",{class:"DERI-USDT SLP"==e.baseToken?"hSlp":"",attrs:{title:"DERI-USDT SLP"==e.baseToken?"DERI-APY":""}},[e._v(e._s(e.apy))]),e._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:e.isslp,expression:"isslp"}]},[e._v("+")]),e._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:e.isslp,expression:"isslp"}],class:"DERI-USDT SLP"==e.baseToken?"hSlp":"",attrs:{title:"DERI-USDT SLP"==e.baseToken?"SUSHI-APY":""}},[e._v(e._s(e.sushi_apy))])])]),e._v(" "),a("div",{staticClass:"odd text"},[a("div",{staticClass:"text_title"},[e._v("Liquidity Share Value")]),e._v(" "),a("div",{staticClass:"text_num"},[e._v(e._s(e.PerLiquidityShare)+" "+e._s(e.baseToken))])]),e._v(" "),a("div",{staticClass:"odd text"},[a("div",{staticClass:"text_title"},[e._v("My Liquidity Pencentage")]),e._v(" "),a("div",{staticClass:"text_num"},[e._v(e._s(e.pencentage))])]),e._v(" "),a("div",{staticClass:"odd text"},[a("div",{staticClass:"text_title"},[e._v("Staked Balance")]),e._v(" "),a("div",{staticClass:"text_num"},[e._v(e._s(e.my_liquidity)+" "),a("span",{staticStyle:{color:"#ffffff"}},[e._v("Shares")])])]),e._v(" "),a("div",{staticClass:"odd claim_network"},[a("div",{staticClass:"text_title money"},[e._v(e._s(e.money)+" "+e._s(e.baseToken))])]),e._v(" "),a("div",{staticClass:"liquidity_btn"},[e.isWrong?a("div",[a("button",{staticClass:"btn approve_btn",staticStyle:{color:"#e35061","font-family":"'Korolev'","font-weight":"400"},attrs:{disabled:""}},[e._v("\n                    Wrong Network\n                  ")])]):a("div",[e.isConnect?a("div",[e.isApprove?a("div",{staticClass:"add_remove_liquidity"},[a("button",{staticClass:"add_liquidity",attrs:{"data-toggle":"modal","data-target":"#addLiquidity"}},[e._v("\n                  ADD LIQUIDITY\n                ")]),e._v(" "),a("button",{staticClass:"remove_liquidity",attrs:{"data-toggle":"modal","data-target":"#removeLiquidity"}},[e._v("\n                  REMOVE LIQUIDITY\n                ")])]):a("div",{staticClass:"approve"},[e.isnoslpandclp?a("button",{staticClass:"approve_btn",attrs:{id:"Unlock"},on:{click:e.unlock}},[a("span",{staticClass:"spinner spinner-border spinner-border-sm",staticStyle:{display:"none"},attrs:{role:"status","aria-hidden":"true"}}),e._v("\n                    APPROVE\n                  ")]):e._e(),e._v(" "),e.isslp?a("button",{staticClass:"approve_btn",attrs:{id:"SlpUnlock"},on:{click:e.unlockSlp}},[a("span",{staticClass:"spinner spinner-border spinner-border-sm",staticStyle:{display:"none"},attrs:{role:"status","aria-hidden":"true"}}),e._v("\n                    APPROVE\n                  ")]):e._e(),e._v(" "),e.isclp?a("button",{staticClass:"approve_btn",attrs:{id:"clpUnlock"},on:{click:e.unlockClp}},[a("span",{staticClass:"spinner spinner-border spinner-border-sm",staticStyle:{display:"none"},attrs:{role:"status","aria-hidden":"true"}}),e._v("\n                    APPROVE\n                  ")]):e._e()]),e._v(" "),a("div")]):a("div",[e.isnoslpandclp?a("button",{staticClass:"btn approve_btn",on:{click:e.connectWallet}},[e._v("\n                    Connect Wallet\n                  ")]):e._e(),e._v(" "),e.isslp?a("button",{staticClass:"btn approve_btn",on:{click:e.slpConnectWallet}},[e._v("\n                    Connect Wallet\n                  ")]):e._e(),e._v(" "),e.isclp?a("button",{staticClass:"btn approve_btn",on:{click:e.clpConnectWallet}},[e._v("\n                    Connect Wallet\n                  ")]):e._e()])])])])]),e._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:!e.isLp,expression:"!isLp"}],staticClass:"trade_info"},[a("div",{staticClass:"claim_box"},[a("div",{staticClass:"odd title"},[e._v("My Trading Harvest in Current Epoch")]),e._v(" "),a("div",{staticClass:"odd text"},[a("div",{staticClass:"text_title"},[e._v("My Trading Harvest in Current Epoch (Est)")]),e._v(" "),a("div",{staticClass:"text_num"},[e._v(e._s(e.myHarvestDeriTrade)+" DERI")])]),e._v(" "),a("div",{staticClass:"odd text"},[a("div",{staticClass:"text_title"},[e._v("Claimed DERI")]),e._v(" "),a("div",{staticClass:"text_num"},[e._v(e._s(e.claimed))])]),e._v(" "),e._m(7),e._v(" "),e._m(8),e._v(" "),a("div",{staticClass:"odd text"},[a("div",{staticClass:"text_title"},[e._v("Unclaimed DERI")]),e._v(" "),a("div",{staticClass:"text_num"},[e._v(e._s(e.unclaimed))])]),e._v(" "),e._m(9),e._v(" "),a("div",{staticClass:"claim_btn"},[e.isConnect?a("button",{staticClass:"claim",attrs:{id:"tradeclaimmyderi"},on:{click:e.tmintDToken}},[a("span",{staticClass:"spinner spinner-border spinner-border-sm",staticStyle:{display:"none"},attrs:{role:"status","aria-hidden":"true"}}),e._v("\n                CLAIM\n              ")]):a("div",[e.isnoslpandclp?a("button",{staticClass:"btn  claim",on:{click:e.connectWallet}},[e._v("\n                  Connect Wallet\n                ")]):e._e(),e._v(" "),e.isslp?a("button",{staticClass:"btn  claim",on:{click:e.slpConnectWallet}},[e._v("\n                  Connect Wallet\n                ")]):e._e(),e._v(" "),e.isclp?a("button",{staticClass:"btn  claim",on:{click:e.clpConnectWallet}},[e._v("\n                  Connect Wallet\n                ")]):e._e()])])]),e._v(" "),a("div",{staticClass:"liquidity_box"},[a("div",{staticClass:"odd title"},[e._v("Trade to Earn DERI")]),e._v(" "),a("div",{staticClass:"odd text"},[a("div",{staticClass:"text_title"},[e._v("Total Trading Volume in Current Hour")]),e._v(" "),a("div",{staticClass:"text_num"},[e._v(e._s(e.totaltradingvolumecurrent))])]),e._v(" "),a("div",{staticClass:"odd text"},[a("div",{staticClass:"text_title"},[e._v("My Trading Volume in Current Hour")]),e._v(" "),a("div",{staticClass:"text_num"},[e._v(e._s(e.mytradingvolumecurrent))])]),e._v(" "),e._m(10),e._v(" "),e._m(11),e._v(" "),e._m(12),e._v(" "),a("div",{staticClass:"odd claim_network"}),e._v(" "),a("div",{staticClass:"claim_btn"},[a("router-link",{attrs:{to:"/lite"}},[a("button",{staticClass:"claim"},[e._v("\n                  TRADE\n                ")])])],1)])])])])]),e._v(" "),a("div",{staticClass:"margin_footer"}),e._v(" "),a("footers")],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"modal-header"},[e("div",{staticClass:"title"},[this._v("\n            ADD LIQUIDITY\n          ")]),this._v(" "),e("div",{staticClass:"close",attrs:{"data-dismiss":"modal"}},[e("span",[this._v("×")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"modal-header"},[e("div",{staticClass:"title"},[this._v("\n            REMOVE LIQUIDITY\n          ")]),this._v(" "),e("div",{staticClass:"close",attrs:{"data-dismiss":"modal"}},[e("span",[this._v("×")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"logo"},[e("a",{attrs:{href:"https://deri.finance",target:"_blank"}},[e("img",{attrs:{src:i("+v4m"),alt:""}})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",{staticClass:"menu_li"},[e("a",{attrs:{target:"_blank",href:"https://governance.deri.finance/"}},[this._v("Governance")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",{staticClass:"menu_li"},[e("a",{attrs:{target:"_blank",href:"https://bridge.deri.finance/"}},[this._v("Bridge")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"ref_box"},[i("ul",{attrs:{id:"docs_index"}},[i("li",{staticClass:"docs_li"},[i("a",{attrs:{href:"https://github.com/deri-finance/whitepaper/blob/master/deri_whitepaper.pdf"}},[t._v("Whitepaper")])]),t._v(" "),i("li",{staticClass:"docs_li"},[i("a",{attrs:{href:"https://github.com/peckshield/publications/blob/master/audit_reports/PeckShield-Audit-Report-Deri-v1.0.pdf"}},[t._v("Code Audit")])]),t._v(" "),i("li",{staticClass:"docs_li"},[i("a",{attrs:{href:"https://deri.finance/#/team"}},[t._v("Team")])]),t._v(" "),i("li",{staticClass:"docs_li"},[i("a",{attrs:{href:"https://docs.deri.finance/faq"}},[t._v("FAQ")])]),t._v(" "),i("li",{staticClass:"docs_li"},[i("a",{attrs:{href:"https://docs.deri.finance/"}},[t._v("Guide")])]),t._v(" "),i("li",{staticClass:"docs_li"},[i("a",{attrs:{href:"https://github.com/deri-finance/"}},[t._v("Github")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"odd text"},[e("div",{staticClass:"text_title"}),this._v(" "),e("div",{staticClass:"text_num"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"odd text"},[e("div",{staticClass:"text_title"}),this._v(" "),e("div",{staticClass:"text_num"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"odd text"},[e("div",{staticClass:"text_title"}),this._v(" "),e("div",{staticClass:"text_num"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"odd claim_network"},[e("div",{staticClass:"text_title"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"odd text"},[e("div",{staticClass:"text_title"}),this._v(" "),e("div",{staticClass:"text_num"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"odd text"},[e("div",{staticClass:"text_title"}),this._v(" "),e("div",{staticClass:"text_num"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"odd text"},[e("div",{staticClass:"text_title"}),this._v(" "),e("div",{staticClass:"text_num"})])}]};var C=i("C7Lr")(b,g,!1,function(t){i("RKsz")},"data-v-c48e785a",null);e.default=C.exports}});