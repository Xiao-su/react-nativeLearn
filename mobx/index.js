import { makeObservable, observable, action } from "mobx"

class RootState{

  @observable
  name = 'helloaaaaaaaaaaaaaa';
  
  @action
  changeName = (name) =>{
    this.name = name;
  }
}

export default new RootState();