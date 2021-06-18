import { Component, OnInit } from '@angular/core';
import { Proxy } from '../sidemenu/application/proxy';
import { Update } from '../sidemenu/application/update';
import { Comments } from '../sidemenu/features/comments';
import { Debug } from '../sidemenu/features/debug';
import { Explorer } from '../sidemenu/features/explorer';
import { Extension } from '../sidemenu/features/extensions';
import { Remote } from '../sidemenu/features/remote';
import { SCM } from '../sidemenu/features/scm';
import { Search } from '../sidemenu/features/search';
import { Task } from '../sidemenu/features/task';
import { Terminal } from '../sidemenu/features/terminal';
import { Testing } from '../sidemenu/features/testing';
import { Workspace } from '../sidemenu/security/workspace';
import { Cursor } from '../sidemenu/textEditor/cursor';
import { Diffeditor } from '../sidemenu/textEditor/diffeditor';
import { Files } from '../sidemenu/textEditor/files';
import { Find } from '../sidemenu/textEditor/find';
import { Font } from '../sidemenu/textEditor/font';
import { Formatting } from '../sidemenu/textEditor/formatting';
import { Minimap } from '../sidemenu/textEditor/minimap';
import { Suggest } from '../sidemenu/textEditor/suggestions';
import { TextEditor } from '../sidemenu/textEditor/textEditor';
import { Newwindow } from '../sidemenu/window/newwindow';
import { Window } from '../sidemenu/window/window';
import { Appearance } from '../sidemenu/workbench/appearance';
import { Beadcrumb } from '../sidemenu/workbench/beadcrumbs';
import { Editormanage } from '../sidemenu/workbench/editormanagement';
import { Screencast } from '../sidemenu/workbench/screencastMode';
import { Workbench } from '../sidemenu/workbench/workBench';
import { Commonly } from '../sidemenu/commonly';
@Component({
  selector: 'app-user-setting',
  templateUrl: './user-setting.component.html',
  styleUrls: ['./user-setting.component.css']
})
export class UserSettingComponent implements OnInit {
  usersetting = Commonly
  textEditor=TextEditor 
  cursor=Cursor 
  find=Find 
  font = Font
  formatting=Formatting 
  diffeditor=Diffeditor 
  minimap=Minimap 
  suggest=Suggest 
  files=Files 
  workbench=Workbench 
  appearance=Appearance 
  beadcrumb=Beadcrumb  
  editormanage=Editormanage 
  screencast=Screencast 
  window=Window 
  newwindow=Newwindow 
  explorer=Explorer 
  search=Search 
  debug=Debug 
  testing=Testing 
  scm=SCM 
  extension=Extension 
  terminal=Terminal 
  task=Task  
  comments=Comments 
  remote=Remote 
  proxy = Proxy 
  update = Update 
  workspace=Workspace 
  
  constructor() { }

  ngOnInit(): void {
  }

}
