(this["webpackJsonpapp.deri.finance"]=this["webpackJsonpapp.deri.finance"]||[]).push([[12],{585:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));n(6);var i=n(30),o=n(570),s=n.n(o),r=n(57);function a(e){var t=e.lite,n=Object(i.g)(),o=s()("check-lite-pro",{lite:t,pro:!t}),a=function(e){n.push(e)};return Object(r.jsxs)("div",{className:o,children:[Object(r.jsx)("div",{className:"lite",onClick:function(){return a("/lite")},children:"LITE"}),Object(r.jsx)("div",{className:"pro",onClick:function(){return a("/pro")},children:" PRO"})]})}},586:function(e,t,n){},624:function(e,t,n){},638:function(e,t,n){"use strict";n.r(t);var i=n(6),o=n(14),s=function(){return(s=Object.assign||function(e){for(var t,n=arguments,i=1,o=arguments.length;i<o;i++)for(var s in t=n[i])Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s]);return e}).apply(this,arguments)};function r(e,t){var n=s({},e);for(var i in t)"object"!=typeof e[i]||null===e[i]||Array.isArray(e[i])?void 0!==t[i]&&(n[i]=t[i]):n[i]=r(e[i],t[i]);return n}var a={mobile:{disabled_features:["left_toolbar","header_widget","timeframes_toolbar","edit_buttons_in_legend","context_menus","control_bar","border_around_the_chart"],enabled_features:[]}},c={width:800,height:500,interval:"1D",timezone:"Etc/UTC",container_id:"",library_path:"",locale:"en",widgetbar:{details:!1,watchlist:!1,watchlist_settings:{default_symbols:[]}},overrides:{"mainSeriesProperties.showCountdown":!1},studies_overrides:{},trading_customization:{position:{},order:{}},brokerConfig:{configFlags:{}},fullscreen:!1,autosize:!1,disabled_features:[],enabled_features:[],debug:!1,logo:{},time_frames:[{text:"5y",resolution:"1W"},{text:"1y",resolution:"1W"},{text:"6m",resolution:"120"},{text:"3m",resolution:"60"},{text:"1m",resolution:"30"},{text:"5d",resolution:"5"},{text:"1d",resolution:"1"}],client_id:"0",user_id:"0",charts_storage_api_version:"1.0",favorites:{intervals:[],chartTypes:[]}};var l=function(){function e(e){if(this._id="tradingview_"+(1048576*(1+Math.random())|0).toString(16).substring(1),this._ready=!1,this._readyHandlers=[],this._onWindowResize=this._autoResizeChart.bind(this),!e.datafeed)throw new Error("Datafeed is not defined");if(this._options=r(c,e),e.preset){var t=a[e.preset];t?(void 0!==this._options.disabled_features?this._options.disabled_features=this._options.disabled_features.concat(t.disabled_features):this._options.disabled_features=t.disabled_features,void 0!==this._options.enabled_features?this._options.enabled_features=this._options.enabled_features.concat(t.enabled_features):this._options.enabled_features=t.enabled_features):console.warn("Unknown preset: `"+e.preset+"`")}"Dark"===this._options.theme&&void 0===this._options.loading_screen&&(this._options.loading_screen={backgroundColor:"#131722"}),this._create()}return e.prototype.onChartReady=function(e){this._ready?e.call(this):this._readyHandlers.push(e)},e.prototype.headerReady=function(){var e=this;return this._innerWindowLoaded.then((function(){return e._innerWindow().headerReady()}))},e.prototype.onGrayedObjectClicked=function(e){this._innerAPI().onGrayedObjectClicked(e)},e.prototype.onShortcut=function(e,t){this._innerWindow().createShortcutAction(e,t)},e.prototype.subscribe=function(e,t){this._innerAPI().subscribe(e,t)},e.prototype.unsubscribe=function(e,t){this._innerAPI().unsubscribe(e,t)},e.prototype.chart=function(e){return this._innerAPI().chart(e)},e.prototype.getLanguage=function(){return this._options.locale},e.prototype.setSymbol=function(e,t,n){this._innerAPI().changeSymbol(e,t,n)},e.prototype.remove=function(){window.removeEventListener("resize",this._onWindowResize),this._readyHandlers.splice(0,this._readyHandlers.length),delete window[this._id],this._iFrame.parentNode&&this._iFrame.parentNode.removeChild(this._iFrame)},e.prototype.closePopupsAndDialogs=function(){this._innerAPI().closePopupsAndDialogs()},e.prototype.selectLineTool=function(e){this._innerAPI().selectLineTool(e)},e.prototype.selectedLineTool=function(){return this._innerAPI().selectedLineTool()},e.prototype.save=function(e){this._innerAPI().saveChart(e)},e.prototype.load=function(e,t){this._innerAPI().loadChart({json:e,extendedData:t})},e.prototype.getSavedCharts=function(e){this._innerAPI().getSavedCharts(e)},e.prototype.loadChartFromServer=function(e){this._innerAPI().loadChartFromServer(e)},e.prototype.saveChartToServer=function(e,t,n){this._innerAPI().saveChartToServer(e,t,n)},e.prototype.removeChartFromServer=function(e,t){this._innerAPI().removeChartFromServer(e,t)},e.prototype.onContextMenu=function(e){this._innerAPI().onContextMenu(e)},e.prototype.createButton=function(e){return this._innerWindow().createButton(e)},e.prototype.showNoticeDialog=function(e){this._innerAPI().showNoticeDialog(e)},e.prototype.showConfirmDialog=function(e){this._innerAPI().showConfirmDialog(e)},e.prototype.showLoadChartDialog=function(){this._innerAPI().showLoadChartDialog()},e.prototype.showSaveAsChartDialog=function(){this._innerAPI().showSaveAsChartDialog()},e.prototype.symbolInterval=function(){return this._innerAPI().getSymbolInterval()},e.prototype.mainSeriesPriceFormatter=function(){return this._innerAPI().mainSeriesPriceFormatter()},e.prototype.getIntervals=function(){return this._innerAPI().getIntervals()},e.prototype.getStudiesList=function(){return this._innerAPI().getStudiesList()},e.prototype.addCustomCSSFile=function(e){this._innerWindow().addCustomCSSFile(e)},e.prototype.applyOverrides=function(e){this._options=r(this._options,{overrides:e}),this._innerWindow().applyOverrides(e)},e.prototype.applyStudiesOverrides=function(e){this._innerWindow().applyStudiesOverrides(e)},e.prototype.watchList=function(){return this._innerAPI().watchlist()},e.prototype.activeChart=function(){return this._innerAPI().activeChart()},e.prototype.chartsCount=function(){return this._innerAPI().chartsCount()},e.prototype.layout=function(){return this._innerAPI().layout()},e.prototype.setLayout=function(e){this._innerAPI().setLayout(e)},e.prototype.layoutName=function(){return this._innerAPI().layoutName()},e.prototype.changeTheme=function(e,t){this._innerWindow().changeTheme(e,t)},e.prototype.getTheme=function(){return this._innerWindow().getTheme()},e.prototype.takeScreenshot=function(){this._innerAPI().takeScreenshot()},e.prototype.lockAllDrawingTools=function(){return this._innerAPI().lockAllDrawingTools()},e.prototype.hideAllDrawingTools=function(){return this._innerAPI().hideAllDrawingTools()},e.prototype.drawOnAllCharts=function(e){this._innerAPI().drawOnAllCharts(e)},e.prototype.magnetEnabled=function(){return this._innerAPI().magnetEnabled()},e.prototype.magnetMode=function(){return this._innerAPI().magnetMode()},e.prototype.undoRedoState=function(){return this._innerAPI().undoRedoState()},e.prototype.setIntervalLinkingEnabled=function(e){this._innerAPI().setIntervalLinkingEnabled(e)},e.prototype.setTimeFrame=function(e){this._innerAPI().setTimeFrame(e)},e.prototype.symbolSync=function(){return this._innerAPI().symbolSync()},e.prototype.intervalSync=function(){return this._innerAPI().intervalSync()},e.prototype.crosshairSync=function(){return this._innerAPI().crosshairSync()},e.prototype.timeSync=function(){return this._innerAPI().timeSync()},e.prototype.getAllFeatures=function(){return this._innerWindow().getAllFeatures()},e.prototype.clearUndoHistory=function(){return this._innerAPI().clearUndoHistory()},e.prototype.undo=function(){return this._innerAPI().undo()},e.prototype.redo=function(){return this._innerAPI().redo()},e.prototype.startFullscreen=function(){this._innerAPI().startFullscreen()},e.prototype.exitFullscreen=function(){this._innerAPI().exitFullscreen()},e.prototype.takeClientScreenshot=function(e){return this._innerAPI().takeClientScreenshot(e)},e.prototype._innerAPI=function(){return this._innerWindow().tradingViewApi},e.prototype._innerWindow=function(){return this._iFrame.contentWindow},e.prototype._autoResizeChart=function(){this._options.fullscreen&&(this._iFrame.style.height=window.innerHeight+"px")},e.prototype._create=function(){var e=this,t=this._render(),n=document.getElementById(this._options.container_id);if(null===n)throw new Error("There is no such element - #"+this._options.container_id);n.innerHTML=t,this._iFrame=n.querySelector("#"+this._id);var i=this._iFrame;(this._options.autosize||this._options.fullscreen)&&(i.style.width="100%",this._options.fullscreen||(i.style.height="100%")),window.addEventListener("resize",this._onWindowResize),this._onWindowResize(),this._innerWindowLoaded=new Promise((function(e){i.addEventListener("load",(function t(){i.removeEventListener("load",t,!1),e()}),!1)})),this._innerWindowLoaded.then((function(){e._innerWindow().widgetReady((function(){e._ready=!0;for(var t=0,n=e._readyHandlers;t<n.length;t++){var i=n[t];try{i.call(e)}catch(o){console.error(o)}}e._innerWindow().initializationFinished()}))}))},e.prototype._render=function(){var e=window;if(e[this._id]={datafeed:this._options.datafeed,customFormatters:this._options.custom_formatters||this._options.customFormatters,brokerFactory:this._options.broker_factory||this._options.brokerFactory,overrides:this._options.overrides,studiesOverrides:this._options.studies_overrides,tradingCustomization:this._options.trading_customization,disabledFeatures:this._options.disabled_features,enabledFeatures:this._options.enabled_features,brokerConfig:this._options.broker_config||this._options.brokerConfig,restConfig:this._options.restConfig,favorites:this._options.favorites,logo:this._options.logo,numeric_formatting:this._options.numeric_formatting,rss_news_feed:this._options.rss_news_feed,newsProvider:this._options.news_provider,loadLastChart:this._options.load_last_chart,saveLoadAdapter:this._options.save_load_adapter,loading_screen:this._options.loading_screen,settingsAdapter:this._options.settings_adapter,getCustomIndicators:this._options.custom_indicators_getter},this._options.saved_data)e[this._id].chartContent={json:this._options.saved_data},this._options.saved_data_meta_info&&(e[this._id].chartContentExtendedData=this._options.saved_data_meta_info);else if(!this._options.load_last_chart&&!this._options.symbol)throw new Error("Symbol is not defined: either 'symbol' or 'load_last_chart' option must be set");var t=(this._options.library_path||"")+(encodeURIComponent(this._options.locale)+"-tv-chart.b555c6a4.html#symbol=")+encodeURIComponent(this._options.symbol||"")+"&interval="+encodeURIComponent(this._options.interval)+(this._options.timeframe?"&timeframe="+encodeURIComponent(this._options.timeframe):"")+(this._options.toolbar_bg?"&toolbarbg="+encodeURIComponent(this._options.toolbar_bg.replace("#","")):"")+(this._options.studies_access?"&studiesAccess="+encodeURIComponent(JSON.stringify(this._options.studies_access)):"")+"&widgetbar="+encodeURIComponent(JSON.stringify(this._options.widgetbar))+(this._options.drawings_access?"&drawingsAccess="+encodeURIComponent(JSON.stringify(this._options.drawings_access)):"")+"&timeFrames="+encodeURIComponent(JSON.stringify(this._options.time_frames))+"&locale="+encodeURIComponent(this._options.locale)+"&uid="+encodeURIComponent(this._id)+"&clientId="+encodeURIComponent(String(this._options.client_id))+"&userId="+encodeURIComponent(String(this._options.user_id))+(this._options.charts_storage_url?"&chartsStorageUrl="+encodeURIComponent(this._options.charts_storage_url):"")+(this._options.charts_storage_api_version?"&chartsStorageVer="+encodeURIComponent(this._options.charts_storage_api_version):"")+(this._options.custom_css_url?"&customCSS="+encodeURIComponent(this._options.custom_css_url):"")+(this._options.auto_save_delay?"&autoSaveDelay="+encodeURIComponent(String(this._options.auto_save_delay)):"")+"&debug="+encodeURIComponent(String(this._options.debug))+(this._options.snapshot_url?"&snapshotUrl="+encodeURIComponent(this._options.snapshot_url):"")+(this._options.timezone?"&timezone="+encodeURIComponent(this._options.timezone):"")+(this._options.study_count_limit?"&studyCountLimit="+encodeURIComponent(String(this._options.study_count_limit)):"")+(this._options.symbol_search_request_delay?"&ssreqdelay="+encodeURIComponent(String(this._options.symbol_search_request_delay)):"")+(this._options.compare_symbols?"&compareSymbols="+encodeURIComponent(JSON.stringify(this._options.compare_symbols)):"")+(this._options.theme?"&theme="+encodeURIComponent(String(this._options.theme)):"");return'<iframe id="'+this._id+'" name="'+this._id+'"  src="'+t+'"'+(this._options.autosize||this._options.fullscreen?"":' width="'+this._options.width+'" height="'+this._options.height+'"')+' frameborder="0" allowTransparency="true" scrolling="no" allowfullscreen style="display:block;"></iframe>'},e}();window.TradingView=window.TradingView||{},window.TradingView.version=function(){return"CL v18.043 (internal id b555c6a4 @ 2021-02-18T09:41:15.150Z)"};var d,u,h,p=n(119),b=n(50),m={},j=Object(p.io)("wss://oracle4.deri.finance",{transports:["websocket"],withCredentials:!0}),_=[],f=null;window.sub_index=0;var v=[],g=function(e,t,n,i,o,s){var r,a="v2"===Object(b.i)()?"".concat(e.name,"_V2"):e.name;switch(d=o,h=i,console.log("from, to",n,i),u=s,!0){case"1"==t:r="min";break;case"5"==t:r="5min";break;case"15"==t:r="15min";break;case"30"==t:r="30min";break;case"60"==t:r="hour";break;case"1D"==t:r="day";break;case"1W"==t:r="week";break;default:r="min"}f={symbol:a,time_type:r,from:n,to:i},j.emit("get_kline",f)},y=function(e,t,n,i,o){var s,r=e.name;switch(!0){case"1"==t:s="min";break;case"5"==t:s="5min";break;case"15"==t:s="15min";break;case"30"==t:s="30min";break;case"60"==t:s="hour";break;case"1D"==t:s="day";break;case"1W"==t:s="week";break;default:s="min"}f={symbol:r,time_type:s,bars:200},j.emit("get_kline",{symbol:r,time_type:s,bars:200});var a={uid:i,resolution:t,symbolInfo:e,lastBar:m[e.name]&&m[e.name].lastBar,listener:n};v.push(a),o()},O=function(e){v.findIndex((function(t){return t.uid===e}))};j.on("connect",(function(e){f&&j.emit("get_kline",f),console.log("socket,connect")})),j.on("kline_update",(function(e){var t={},n=e.time;if(e.time_type===f.time_type&&e.symbol.toUpperCase()===f.symbol.toUpperCase()){t.time=n,t.low=Number(e.low),t.high=Number(e.high),t.open=Number(e.open),t.close=Number(e.close),t.volume=Number(e.volume);var i=v[v.length-1]||{};i.listener&&i.listener(t),i.lastBar=t}})),j.on("kline_history",(function(e){var t=f.symbol;if(_=e.map((function(e){return t=e.symbol,{time:e.time,low:Number(e.low),high:Number(e.high),open:Number(e.open),close:Number(e.close),volume:Number(e.volume)}})),d){var n=_[_.length-1];m[f.symbol]={lastBar:n}}var i=_.length;f.symbol.toUpperCase()===t.toUpperCase()&&(i?1e3*h>_[i-1].time?u(_,{noData:!1}):u([],{noData:!0}):u(_,{noData:!0}))}));var w={supported_resolutions:["1","5","15","30","60","240","1D","5D","1W","1M"]},I={onReady:function(e){setTimeout((function(){return e(w)}),0)},bars:{},searchSymbols:function(e,t,n,i){},resolveSymbol:function(e,t,n){var i={name:e,pricescale:100,ticker:e,description:"",minmov:1,type:"crypto",has_intraday:!0,intraday_multipliers:["1","2","5","15","30","60","240","1D","7D","1W","1M"],has_weekly_and_monthly:!0,data_status:"streaming",has_no_volume:!0,pro_name:e,has_daily:!0,timezone:"UTC",session:"24x7"};setTimeout((function(){t(i)}),0)},getBars:function(e,t,n,i,o,s,r){if(n>0&&i>0){var a=localStorage.getItem("localResolutions")||t;g(e,a,n,i,r,o,s)}},subscribeBars:function(e,t,n,i,o){y(e,t,n,i,o)},unsubscribeBars:function(e){O(e)},calculateHistoryDepth:function(e,t,n){},getMarks:function(e,t,n,i,o){},getTimeScaleMarks:function(e,t,n,i,o){},getServerTime:function(e){}},x=n(570),A=n.n(x),N=n(162),S=n(57),C="tv_chart_container";var D=Object(N.b)("trading")(Object(N.c)((function(e){var t=e.symbol,n=Object(i.useState)(!0),s=Object(o.a)(n,2),r=s[0],a=s[1],c=Object(i.useState)("one"),d=Object(o.a)(c,2),u=d[0],h=d[1],p=Object(i.useState)(null),b=Object(o.a)(p,2),m=b[0],j=b[1],_=Object(i.useState)("1"),f=Object(o.a)(_,2),v=f[0],g=f[1],y=A()("btn",u),O=function(e,t){h(t),g(e),m.chart().refreshMarks(),m.activeChart().setResolution(e)};return Object(i.useEffect)((function(){return t&&j(function(){var e=new l({symbol:t,datafeed:I,interval:v,container_id:C,library_path:"/charting_library/",custom_css_url:"/style/tradingview-overide.css",locale:"en",disabled_features:["header_widget","timeframes_toolbar","go_to_date"],enabled_features:["show_logo_on_all_charts"],charts_storage_url:"https://saveload.tradingview.com",charts_storage_api_version:"1.14",client_id:"tradingview.com",user_id:"public_user_id",fullscreen:!1,autosize:!0,overrides:{"paneProperties.background":"#212327","paneProperties.vertGridProperties.color":"#212327","paneProperties.horzGridProperties.color":"#212327","mainSeriesProperties.candleStyle.upColor":"#53B987","mainSeriesProperties.candleStyle.downColor":"#EB4D5C","symbolWatermarkProperties.transparency":90,"mainSeriesProperties.candleStyle.wickUpColor":"#53B987","mainSeriesProperties.candleStyle.wickDownColor":"#EB4D5C","mainSeriesProperties.candleStyle.drawBorder":!0,"mainSeriesProperties.candleStyle.borderUpColor":"#53B987","mainSeriesProperties.candleStyle.borderDownColor":"#EB4D5C","scalesProperties.textColor":"#AAA"},toolbar_bg:"#212327",timezone:"Asia/Shanghai",session:"24x7"});return document.querySelector("iframe").addEventListener("load",(function(e){setTimeout((function(){return a(!1)}),500)})),e}()),function(){null!==m&&m.remove()}}),[t]),Object(S.jsxs)("div",{id:"tradingview",children:[Object(S.jsxs)("div",{className:y,children:[Object(S.jsx)("span",{className:"tab-btn one",onClick:function(){return O("1","one")},children:"1min"}),Object(S.jsx)("span",{className:"tab-btn five",onClick:function(){return O("5","five")},children:"5min"}),Object(S.jsx)("span",{className:"tab-btn fifteen",onClick:function(){return O("15","fifteen")},children:"15min"}),Object(S.jsx)("span",{className:"tab-btn thirty",onClick:function(){return O("30","thirty")},children:"30min"}),Object(S.jsx)("span",{className:"tab-btn sixty",onClick:function(){return O("60","sixty")},children:"1hour"}),Object(S.jsx)("span",{className:"tab-btn one-day",onClick:function(){return O("1D","one-day")},children:"1day"}),Object(S.jsx)("span",{className:"tab-btn one-week",onClick:function(){return O("1W","one-week")},children:"1week"})]}),Object(S.jsx)("div",{className:"loading",style:{display:r?"block":"none"},children:Object(S.jsx)("div",{className:"spinner-border",role:"status",children:Object(S.jsx)("span",{className:"sr-only"})})}),Object(S.jsx)("div",{id:C})]})}))),M=n(571);var k=Object(N.b)("trading","version")(Object(N.c)((function(e){var t=e.version,n=e.trading,s=Object(i.useState)("rise"),r=Object(o.a)(s,2),a=r[0],c=r[1],l=Object(i.useRef)();return Object(i.useEffect)((function(){return l.current&&(l.current>n.index?c("fall"):c("rise")),l.current=n.index,function(){}}),[n.index]),Object(S.jsxs)("div",{id:"trading-view",children:[Object(S.jsxs)("div",{className:"right-top",children:[Object(S.jsx)("div",{className:"symbol-basetoken-text",children:t.isV1?"".concat(n.config?n.config.symbol:"BTCUSD"," / ").concat(n.config?n.config.bTokenSymbol:"","  (10X)"):"".concat(n.config?n.config.symbol:"BTCUSD"," (10X)")}),Object(S.jsxs)("div",{className:"trade-dashboard-item latest-price",children:[Object(S.jsx)("div",{className:"trade-dashboard-title",children:"Index Price"}),Object(S.jsx)("div",{className:a,children:Object(S.jsx)(M.a,{value:n.index,decimalScale:2})})]}),Object(S.jsxs)("div",{className:"trade-dashboard-item latest-price",children:[Object(S.jsxs)("div",{className:"trade-dashboard-title",children:[Object(S.jsx)("span",{children:"Funding Rate Annual"}),"  "]}),Object(S.jsx)("div",{className:"trade-dashboard-value",children:Object(S.jsx)("span",{className:"funding-per",title:n.fundingRateTip,children:Object(S.jsx)(M.a,{value:n.fundingRate.fundingRate0,decimalScale:4,suffix:"%"})})})]}),Object(S.jsxs)("div",{className:"trade-dashboard-item latest-price",children:[Object(S.jsx)("div",{className:"trade-dashboard-title",children:"Total Net Position"}),Object(S.jsx)("div",{className:"trade-dashboard-value",children:Object(S.jsx)(M.a,{value:n.fundingRate.tradersNetVolume})})]}),Object(S.jsxs)("div",{className:"trade-dashboard-item latest-price",children:[Object(S.jsx)("div",{className:"trade-dashboard-title",children:"Pool Total liquidity"}),Object(S.jsxs)("div",{className:"trade-dashboard-value",children:[" ",Object(S.jsx)(M.a,{allowLeadingZeros:!0,value:n.fundingRate.liquidity,decimalScale:2})," ",n.config&&n.config.bTokenSymbol]})]})]}),Object(S.jsx)("div",{className:"tradingview",children:Object(S.jsx)(D,{symbol:n.config&&n.config.symbol})})]})}))),P=n(54),R=n(0),T=n.n(R),U=n(1),L=n(22),z=n(574),E=n(576),B=n(581),G=n(583),W=n(584),Z=n(594),F=n(582),Y=n(595),Q=Object(z.a)(E.a),H=Object(z.a)(B.a),J=Object(z.a)(F.a);var V=Object(N.b)("wallet","trading","version")(Object(N.c)((function(e){var t=e.wallet,n=e.trading,s=e.version,r=Object(i.useState)("LONG"),a=Object(o.a)(r,2),c=a[0],l=a[1],d=Object(i.useState)(!1),u=Object(o.a)(d,2),h=u[0],p=u[1],m=Object(i.useState)(!1),j=Object(o.a)(m,2),_=j[0],f=j[1],v=Object(i.useState)(!1),g=Object(o.a)(v,2),y=g[0],O=g[1],w=Object(i.useState)(!1),I=Object(o.a)(w,2),x=I[0],A=I[1],N=Object(i.useState)(""),C=Object(o.a)(N,2),D=C[0],k=C[1],R=Object(i.useState)(""),z=Object(o.a)(R,2),E=z[0],B=z[1],F=Object(i.useState)(""),V=Object(o.a)(F,2),X=V[0],q=V[1],K=function(){ee()},$=K,ee=function(){te(),n.refresh()},te=function(){var e=Object(U.a)(T.a.mark((function e(){var i;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.isConnected()||!n.config){e.next=5;break}return e.next=3,Object(L.getWalletBalance)(t.detail.chainId,n.config.pool,t.detail.account,n.config.bTokenId).catch((function(e){return console.log(e)}));case 3:(i=e.sent)&&k(i);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ne=function(){var e=Object(U.a)(T.a.mark((function e(){var i;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return p(!0),e.next=3,Object(L.closePosition)(t.detail.chainId,n.config.pool,t.detail.account,n.config.symbolId).finally((function(){return p(!1)}));case 3:(i=e.sent).success?ee():"string"===typeof i.error?alert(i.error||"Liquidation failed"):"object"===Object(P.a)(i.error)?alert(i.error.errorMessage||"Liquidation failed"):alert("Close position failed");case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(i.useEffect)((function(){if(n.position){var e=n.position,t=+e.volume>0?"LONG":Object(b.b)(e.volume,0)||!e.volume?"--":"SHORT";l(t),B(Object(L.bg)(e.margin).plus(e.unrealizedPnl).toString()),q(Object(L.bg)(e.margin).plus(e.unrealizedPnl).minus(e.marginHeld).toString())}return function(){}}),[n.position.volume,n.position.margin,n.position.unrealizedPnl]),Object(i.useEffect)((function(){return te(),function(){}}),[t.detail.account,n.config,n.amount.dynBalance]),Object(i.useEffect)((function(){if(n.position.volume&&n.position.margin&&n.position.unrealizedPnl){var e=+n.position.volume>0?"LONG":Object(b.b)(n.position.volume,0)?"--":"SHORT";l(e)}return function(){}}),[n.position.volume,n.position.margin,n.position.unrealizedPnl]),Object(S.jsxs)("div",{className:"position-box",children:[Object(S.jsxs)("div",{className:"p-box theader",children:[Object(S.jsx)("div",{children:"Position"}),Object(S.jsx)("div",{children:"Average Entry Price"}),Object(S.jsx)("div",{children:"Direction"}),Object(S.jsx)("div",{children:s.isV1?Object(S.jsxs)(S.Fragment,{children:["Balance in Contract ",Object(S.jsx)("br",{})," (Dynamic Balance)"]}):"Dynamic Effective Bal "}),Object(S.jsx)("div",{children:"Margin"}),Object(S.jsx)("div",{children:"Unrealized PnL"}),Object(S.jsx)("div",{children:"Liquidation Price"})]}),Object(S.jsxs)("div",{className:"p-box tbody",children:[Object(S.jsxs)("div",{children:[n.position.volume,Object(S.jsxs)("span",{className:"close-position",children:[!h&&Object(S.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACUAAAAlCAYAAADFniADAAAACXBIWXMAAAsTAAALEwEAmpwYAAAF62lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDIgNzkuMTYwOTI0LCAyMDE3LzA3LzEzLTAxOjA2OjM5ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyMS0wNC0wMlQxNTozODoxMyswODowMCIgeG1wOk1vZGlmeURhdGU9IjIwMjEtMDQtMDZUMjA6MDU6MTIrMDg6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjEtMDQtMDZUMjA6MDU6MTIrMDg6MDAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiBwaG90b3Nob3A6SUNDUHJvZmlsZT0ic1JHQiBJRUM2MTk2Ni0yLjEiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NDlkYTVmMGQtZjBkZC0xYTRiLTlhNWUtZTBlNDMwZTI5OGI3IiB4bXBNTTpEb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6OGU2NWEzMTAtM2M4YS1jMDQ3LWIyMDAtZjZhYTZkMDlkNWRlIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6MDUwZmRhMGUtNTUyNC0wNjQxLTg1ZmYtYWUyNjAyODUxMzgzIj4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY3JlYXRlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDowNTBmZGEwZS01NTI0LTA2NDEtODVmZi1hZTI2MDI4NTEzODMiIHN0RXZ0OndoZW49IjIwMjEtMDQtMDJUMTU6Mzg6MTMrMDg6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAoV2luZG93cykiLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjQ5ZGE1ZjBkLWYwZGQtMWE0Yi05YTVlLWUwZTQzMGUyOThiNyIgc3RFdnQ6d2hlbj0iMjAyMS0wNC0wNlQyMDowNToxMiswODowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4SuXJrAAACqElEQVRYhb3XTWjTYBgH8P+bJq+0TrbatZui4EG3irCNQXVM0CqeBA+CwvAk6EVEQfy4eRFPfiGK4EUGeqgX8aSC4vAiBYnSdkNHFUFh6qGvbWFKmzSJF1Mzl3RvPpr/8X2ekB8P7wMJkWUZudx3cWpqnVJk9MZYv3IOIedTXXzb1PB129rWQQCIIJsVj2Y3qQZABmLaZJHRNYMx7XmYoM29rfFUVE/PMWk4FdMfEVmWDWuTbgAlRq+HMTETZD2bZdJ9ocSke1aVQICRhHK2UKHXwgYpOjEaeuSVMJJQj8+GDLMDNTRiFNmqY5lkY1oAgDBhziB6JJNsTAOAYBbCgHUC7Ug1H7bfa23oJowXtAzVLdjHuviGF2SLChpWron5Lb2tDC/IERUUrFwT80N9rQk3oI4oE1Zi9K4XmFfQiigAGE0oJ4qM3nYD8wPiQgHAWEI5zQvzC+JG8cKCAAEAkWWZtxcAUGD01mhCOUUsZ7oBLPyKfNvYo633CwJcTMqM08SCAnlCOcGCAnlGmbCFRfGHXe1zXXzmFeQLVa6J+Q09rUG72nBc3f+uQi+FirLbMmsiBBhNKBe9wlyjHNZe/1CVXlrvmB+YK5QTqFQRD22Nq/v+v/xeYdyoTqDtA+pjwH4rvcC4UDwgM0HAVkS5AQUF64jyAgoC5ogq16TXXkF+Ybao+ao0M9SnTvoBLYFVpJu6RbYSbBlqvirNpOPqniBAbVi/eqbE6FVe2BJUN0D/YMoFXlgb1U2QW5gQFsgNLLLr8MnQQGYGY9qLIqOrU1FtJ/n7CSsQIBXVdhcrFALI0gd+t7oLMmM3McMADBBNSPepe99XpSdtEJMOdBtkB1N1ggKj58eTzcvtH4e5n9KDRZXkJgaUp2GArClU6BVVF75kUo07APAH3WicsIPb8YcAAAAASUVORK5CYII=",onClick:ne}),Object(S.jsx)("span",{className:"spinner spinner-border spinner-border-sm",style:{display:h?"block":"none",marginLeft:"8px"}})]})]}),Object(S.jsx)("div",{children:Object(S.jsx)(M.a,{value:n.position.averageEntryPrice,decimalScale:2})}),Object(S.jsx)("div",{className:c,children:c}),Object(S.jsxs)("div",{children:[Object(S.jsx)(M.a,{allowZero:!0,value:E,decimalScale:2}),s.isV1?Object(S.jsxs)("span",{children:[Object(S.jsx)("span",{className:"open-add",id:"openAddMargin",onClick:function(){return f(!0)},children:Object(S.jsx)("img",{src:G.a,alt:"add margin"})}),Object(S.jsx)("span",{className:"open-remove",onClick:function(){return O(!0)},children:Object(S.jsx)("img",{src:W.a,alt:"add margin"})})]}):Object(S.jsxs)("span",{className:"balance-list-btn",onClick:function(){return A(!0)},children:[Object(S.jsx)("img",{src:Z.a,alt:"Remove margin"})," Detail"]})]}),Object(S.jsx)("div",{children:Object(S.jsx)(M.a,{value:n.position.marginHeld,decimalScale:2})}),Object(S.jsx)("div",{children:Object(S.jsxs)("span",{className:"pnl-list",children:[Object(S.jsx)(M.a,{value:n.position.unrealizedPnl,decimalScale:8}),s.isV2&&n.position.unrealizedPnl&&Object(S.jsx)("img",{src:Y.a,alt:"unrealizePnl"}),s.isV2&&Object(S.jsx)("div",{className:"pnl-box",children:n.position.unrealizedPnlList&&n.position.unrealizedPnlList.map((function(e,t){return Object(S.jsxs)("div",{className:"unrealizePnl-item",children:[Object(S.jsx)("span",{children:e[0]}),Object(S.jsx)("span",{children:e[1]})]},t)}))})]})}),Object(S.jsx)("div",{children:Object(S.jsx)(M.a,{value:n.position.liquidationPrice,decimalScale:2})})]}),Object(S.jsx)("div",{className:"p-box tbody"}),Object(S.jsx)(Q,{wallet:t,modalIsOpen:_,onClose:function(){return f(!1)},spec:n.config,afterDeposit:$,balance:D,className:"trading-dialog"}),Object(S.jsx)(H,{wallet:t,modalIsOpen:y,onClose:function(){return O(!1)},spec:n.config,afterWithdraw:K,availableBalance:X,position:n.position,className:"trading-dialog"}),Object(S.jsx)(J,{wallet:t,modalIsOpen:x,onClose:function(){return A(!1)},spec:n.config,afterDepositAndWithdraw:function(){ee()},position:n.position,overlay:{background:"#1b1c22",top:80},className:"balance-list-dialog"})]})}))),X=n(596),q=n.n(X),K=(n(573),n(164)),$=n(597),ee=K[L.DeriEnv.get()].chainInfo;function te(e){var t=e.wallet,n=e.his,s=Object(i.useState)(!1),r=Object(o.a)(s,2),a=r[0],c=r[1],l=function(){c(!0)},d=function(){c(!1)},u=A()("view",{hover:a});return Object(S.jsxs)("span",{className:u,onMouseOut:d,children:[Object(S.jsx)("span",{className:"view-space",onMouseOver:l,children:Object(S.jsxs)("a",{target:"_blank",rel:"noreferrer",href:"".concat(ee[t.detail.chainId].viewUrl,"tx/").concat(n.transactionHash),children:["View at ",ee[t.detail.chainId].viewUrl]})}),Object(S.jsx)("span",{className:"right-arrow",onMouseOver:l,children:Object(S.jsx)("img",{alt:"",src:$.a})}),Object(S.jsx)("span",{className:"view-arrow",onMouseOver:l,onMouseOut:d,children:Object(S.jsx)("a",{target:"_blank",rel:"noreferrer",href:"".concat(ee[t.detail.chainId].viewUrl,"tx/").concat(n.transactionHash),children:Object(S.jsx)("img",{rel:"noreferrer",alt:"",src:"data:image/svg+xml;base64,DQo8c3ZnIGZpbGw9Im5vbmUiIGhlaWdodD0iMTAiIHdpZHRoPSIxMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCiAgICA8cGF0aCBkPSJNOC42NzYuNjQyYS42NS42NSAwIDAwLS4wNzIuMDA2SDQuNzkzYS42NS42NSAwIDAwLS41Ny45NzUuNjUuNjUgMCAwMC41Ny4zMjJINy4xMkwuNDM4IDguNjE0YS42NDcuNjQ3IDAgMDAuMjg2IDEuMDk2LjY1LjY1IDAgMDAuNjMyLS4xNzlMOC4wNCAyLjg2MXYyLjMyNGEuNjQ4LjY0OCAwIDAwLjk3Ny41Ny42NDguNjQ4IDAgMDAuMzIyLS41N1YxLjM4YS42NDcuNjQ3IDAgMDAtLjY2Mi0uNzM3eiIgZmlsbD0iI0FBQUFBQSIvPg0KPC9zdmc+DQoNCg=="})})})]})}var ne=Object(N.b)("wallet","trading")(Object(N.c)((function(e){var t=e.wallet,n=e.trading,s=Object(i.useState)([]),r=Object(o.a)(s,2),a=r[0],c=r[1];function l(){return(l=Object(U.a)(T.a.mark((function e(){var i;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.isConnected()&&n.config&&n.history.length>0&&(i=n.history.map((function(e){return e.directionText="LONG"===e.direction?"LONG / BUY":"SHORT / SELL",e.directionText="LONG / BUY","SHORT"===e.direction?e.directionText="SHORT / SELL":"Liquidation"===e.direction&&(e.directionText="LIQUIDATION"),e})),c(i));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(i.useEffect)((function(){return function(){l.apply(this,arguments)}(),function(){}}),[t.detail.account,n.config,n.history]),Object(S.jsxs)("div",{className:"history-box",children:[Object(S.jsxs)("div",{className:"p-box theader",children:[Object(S.jsx)("div",{className:"td",children:"Time"}),Object(S.jsx)("div",{children:"Direction"}),Object(S.jsx)("div",{children:"Base Token"}),Object(S.jsx)("div",{children:"Price"}),Object(S.jsx)("div",{children:"Volume"}),Object(S.jsx)("div",{children:"Notional"}),Object(S.jsx)("div",{children:"Transaction Fee"})]}),a.map((function(e,n){return Object(S.jsxs)("div",{className:"p-box tbody",children:[Object(S.jsx)("div",{className:"td",children:q.a.asString("yyyy-MM-dd hh:mm:ss",new Date(parseInt(e.time)))}),Object(S.jsxs)("div",{className:e.direction,children:[e.directionText,Object(S.jsx)(te,{wallet:t,his:e})]}),Object(S.jsx)("div",{children:e.baseToken||"--"}),Object(S.jsx)("div",{children:Object(S.jsx)(M.a,{value:e.price,decimalScale:2})}),Object(S.jsx)("div",{children:e.volume}),Object(S.jsx)("div",{children:Object(S.jsx)(M.a,{value:e.notional,decimalScale:4})}),Object(S.jsx)("div",{children:Object(S.jsx)(M.a,{value:e.transactionFee,decimalScale:4})})]},n)}))]})})));var ie=function(e){e.wallet,e.trading;var t=Object(i.useState)("position"),n=Object(o.a)(t,2),s=n[0],r=n[1],a=function(e){r(e)},c=A()("position-info",s);return Object(S.jsxs)("div",{className:c,children:[Object(S.jsxs)("div",{className:"position-header",children:[Object(S.jsxs)("div",{className:"position-title",children:[Object(S.jsx)("span",{className:"position-info-title",children:"POSITION INFO"}),Object(S.jsx)("span",{className:"history-info-title",children:"TRADE HISTORY"})]}),Object(S.jsxs)("div",{className:"check-position-history ",children:[Object(S.jsx)("div",{className:"btn-position",onClick:function(){return a("position")},children:"CURRENT POSITION"}),Object(S.jsx)("div",{className:"btn-history",onClick:function(){return a("history")},children:"TRADE HISTORY"})]})]}),Object(S.jsxs)("div",{className:"pos-his-info ",children:[Object(S.jsx)(V,{}),Object(S.jsx)(ne,{})]})]})},oe=n(588),se=n(585);n(586),n(624);t.default=Object(N.b)("wallet")(Object(N.c)((function(e){var t=e.wallet;return Object(i.useEffect)((function(){return document.querySelector(".desktop").style.minWidth="1920px",function(){document.querySelector(".desktop").style.minWidth=""}}),[t.detail.account]),Object(S.jsxs)("div",{className:"trade-body",children:[Object(S.jsx)(se.a,{}),Object(S.jsxs)("div",{className:"trade-pro",children:[Object(S.jsx)("div",{className:"left",children:Object(S.jsx)(oe.a,{isPro:!0})}),Object(S.jsxs)("div",{className:"right",children:[Object(S.jsx)(k,{wallet:t}),Object(S.jsx)(ie,{})]})]})]})})))}}]);
//# sourceMappingURL=12.c7154443.chunk.js.map