//>>built
define("dojox/gantt/TabMenu","./contextMenuTab ./GanttTaskControl ./GanttProjectControl dijit/Dialog dijit/form/Button dijit/form/Form dijit/registry dojo/_base/declare dojo/_base/array dojo/_base/lang dojo/date/locale dojo/request dojo/on dojo/dom dojo/dom-class dojo/dom-construct dojo/dom-style dojo/dom-attr dojo/dom-geometry dojo/keys dojo/domReady!".split(" "),function(n,p,q,r,l,x,s,t,m,e,y,z,f,A,c,h,u,v,k,w){return t("dojox.gantt.TabMenu",[],{constructor:function(a){this.ganttChart=a;this.tabPanelDlgId=
this.tabPanelDlg=this.paneActionBar=this.paneContentArea=this.menuPanel=null;this.arrTabs=[];this.isShow=!1;this.buildContent()},buildContent:function(){this.createMenuPanel();this.createTabPanel();var a=this.createTab(11,"Add Successor Task","t",!0,this);a.addItem(1,"Id","id",!0);a.addItem(2,"Name","name");a.addItem(3,"Start Time","startTime");a.addItem(4,"Duration (hours)","duration");a.addItem(5,"Percent Complete (%)","percentage");a.addItem(6,"Task Assignee","taskOwner");a.addAction("addSuccessorTaskAction");
a=this.createTab(10,"Add Child Task","t",!0,this);a.addItem(1,"Id","id",!0);a.addItem(2,"Name","name");a.addItem(3,"Start Time","startTime");a.addItem(4,"Duration (hours)","duration");a.addItem(5,"Percent Complete (%)","percentage");a.addItem(6,"Task Assignee","taskOwner");a.addAction("addChildTaskAction");a=this.createTab(4,"Set Duration(hours)","t",!0,this,!0);a.addItem(1,"Duration (hours)","duration",!0);a.addAction("durationUpdateAction");a=this.createTab(5,"Set Complete Percentage (%)","t",!0,
this,!0);a.addItem(1,"Percent Complete (%)","percentage",!0);a.addAction("cpUpdateAction");a=this.createTab(20,"Set Owner","t",!0,this,!0);a.addItem(1,"Task Assignee","taskOwner",!0);a.addAction("ownerUpdateAction");a=this.createTab(13,"Set Previous Task","t",!0,this);a.addItem(1,"Previous Task Id","previousTaskId",!0);a.addAction("ptUpdateAction");a=this.createTab(1,"Rename Task","t",!0,this,!0);a.addItem(1,"New Name","name",!0);a.addAction("renameTaskAction");this.createTab(2,"Delete Task","t",
!0,this).addAction("deleteAction");a=this.createTab(12,"Add New Project","p",!1,this);a.addItem(1,"Id","id",!0);a.addItem(2,"Name","name",!0);a.addItem(3,"Start Date","startDate",!0);a.addAction("addProjectAction");a=this.createTab(8,"Set Complete Percentage (%)","p",!0,this,!0);a.addItem(1,"Percent Complete (%)","percentage",!0);a.addAction("cpProjectAction");a=this.createTab(6,"Rename Project","p",!0,this,!0);a.addItem(1,"New Name","name",!0);a.addAction("renameProjectAction");this.createTab(7,
"Delete Project","p",!0,this).addAction("deleteProjectAction");a=this.createTab(9,"Add New Task","p",!0,this);a.addItem(1,"Id","id",!0);a.addItem(2,"Name","name");a.addItem(3,"Start Time","startTime");a.addItem(4,"Duration (hours)","duration");a.addItem(5,"Percent Complete (%)","percentage");a.addItem(6,"Task Assignee","taskOwner");a.addItem(7,"Parent Task Id","parentTaskId");a.addItem(8,"Previous Task Id","previousTaskId");a.addAction("addTaskAction")},createMenuPanel:function(){this.menuPanel=h.create("div",
{innerHTML:"\x3ctable\x3e\x3c/table\x3e",className:"ganttMenuPanel"},this.ganttChart.content);c.add(this.menuPanel.firstChild,"ganttContextMenu");this.menuPanel.firstChild.cellPadding=0;this.menuPanel.firstChild.cellSpacing=0},createTabPanel:function(){this.tabPanelDlg=s.byId(this.tabPanelDlgId)||new r({title:"Settings"});this.tabPanelDlgId=this.tabPanelDlg.id;this.tabPanelDlg.closeButtonNode.style.display="none";var a=this.tabPanelDlg.containerNode;this.paneContentArea=h.create("div",{className:"dijitDialogPaneContentArea"},
a);this.paneActionBar=h.create("div",{className:"dijitDialogPaneActionBar"},a);this.paneContentArea.innerHTML="\x3ctable cellpadding\x3d0 cellspacing\x3d0\x3e\x3ctr\x3e\x3cth\x3e\x3c/th\x3e\x3c/tr\x3e\x3ctr\x3e\x3ctd\x3e\x3c/td\x3e\x3c/tr\x3e\x3c/table\x3e";a=this.paneContentArea.firstChild.rows[0].cells[0];a.colSpan=2;a.innerHTML="Description: ";c.add(a,"ganttDialogContentHeader");a=this.paneContentArea.firstChild.rows[1].cells[0];a.innerHTML="\x3ctable\x3e\x3c/table\x3e";c.add(a.firstChild,"ganttDialogContentCell");
a.align="center";this.ok=new l({label:"OK"});this.cancel=new l({label:"Cancel"});this.paneActionBar.appendChild(this.ok.domNode);this.paneActionBar.appendChild(this.cancel.domNode)},addItemMenuPanel:function(a){var g=this.menuPanel.firstChild.insertRow(this.menuPanel.firstChild.rows.length),b=h.create("td",{className:"ganttContextMenuItem",innerHTML:a.Description});v.set(b,"tabIndex",0);this.ganttChart._events.push(f(b,"click",e.hitch(this,function(){try{this.hide(),a.show()}catch(b){}})));this.ganttChart._events.push(f(b,
"keydown",e.hitch(this,function(b){if(b.keyCode==w.ENTER)try{this.hide(),a.show()}catch(d){}})));this.ganttChart._events.push(f(b,"mouseover",e.hitch(this,function(){c.add(b,"ganttContextMenuItemHover")})));this.ganttChart._events.push(f(b,"mouseout",e.hitch(this,function(){c.remove(b,"ganttContextMenuItemHover")})));g.appendChild(b)},show:function(a,g){g.constructor==p?m.forEach(this.arrTabs,function(a){"t"==a.type&&(a.object=g,this.addItemMenuPanel(a))},this):g.constructor==q&&m.forEach(this.arrTabs,
function(a){"p"==a.type&&(a.object=g,this.addItemMenuPanel(a))},this);this.isShow=!0;u.set(this.menuPanel,{zIndex:15,visibility:"visible"});var b=k.position(this.menuPanel,!0),c=k.position(this.ganttChart.content,!0),d=k.position(a,!0);this.menuPanel.style.top=d.y+b.h>c.y+c.h+50?d.y-b.h+d.h+"px":d.y+"px";k.isBodyLtr()?this.menuPanel.style.left=d.x+d.w+5+"px":this.menuPanel.style.left=d.x-b.w-5+"px"},hide:function(){this.isShow=!1;this.menuPanel.style.visibility="hidden"},clear:function(){this.menuPanel.removeChild(this.menuPanel.firstChild);
this.menuPanel.innerHTML="\x3ctable\x3e\x3c/table\x3e";c.add(this.menuPanel.firstChild,"ganttContextMenu");this.menuPanel.firstChild.cellPadding=0;this.menuPanel.firstChild.cellSpacing=0},createTab:function(a,c,b,e,d,f){a=new n(a,c,b,e,d,f);this.arrTabs.push(a);return a}})});
//@ sourceMappingURL=TabMenu.js.map