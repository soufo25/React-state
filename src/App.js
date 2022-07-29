import React from 'react';
class Welcome extends React.Component {
  state = {Person:{fullName:'Nteyou Yousouf', bio: 'We demistify the web for you',
  imgSrc:'', profession: 'Web Dev', 
 },
show: true, count: 0, intervalId: 0
};
  showStatePerson = () =>{this.setState({
    ...this.state,
    show: !this.state.show, count:0
  });
};

componentDidMount() {
  const intervalId = setInterval(() => {
    this.setState(prevState => {
      return {
        count: prevState.count + 1,
      };
    });
  }, 1000);
}

componentWillUnmount(){
  clearInterval(this.state.intervalId);
};



render() {
  return (
    <div className ="main">
      {this.state.show && (
        <>
          <h1>{this.state.Person.fullName}</h1>
          <h3>{this.state.Person.bio}</h3>
          <img src={this.state.Person.imgSrc} alt=" " width ="40px" height= "40px"></img>
          <h3>{this.state.Person.profession}</h3>
          <br></br>
        </>
      )}

      <button className='btn' onClick={() => this.showStatePerson () }>click here</button>
      <h2>Component render time: {this.state.count} seconds</h2>
    </div>
    
  );
}
}



export default Welcome;
