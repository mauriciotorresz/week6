// DO NOT MODIFY ANYTHING BETWEEN LINES 1-33. NO REALLY.
// React
var React = require('react');
var ReactDOM = require('react-dom');

// shuffles (randomizes an array)
// e.g. myArray.shuffle()
Array.prototype.shuffle = function() {
  var currentIndex = this.length, temporaryValue, randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = this[currentIndex];
    this[currentIndex] = this[randomIndex];
    this[randomIndex] = temporaryValue;
  }
  return this;
}

// returns a deck of cards
// e.g. getDeck()
window.getDeck = function() {
  var ranks = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'jack', 'queen', 'king', 'ace'];
  var suits = ['clubs', 'diamonds', 'hearts', 'spades'];
  var cards = [];
  ranks.forEach(function(rank, index) {
    suits.forEach(function(suit, index) {
      cards.push(rank + "_of_" + suit);
    });
  });
  return cards;
}
// END OF STUFF TO NOT MODIFY

  var Card1 = React.createClass({
    render: function() {
      return(
        <div>
          <h1><img className="img-responsive" src={"http://golearntocode.com/images/cards/"+ this.props.card + ".png"} /></h1>
        </div>
      )
    }
  })

  var Card2 = React.createClass({
    render: function() {
      return(
        <div>
          <h1><img className="img-responsive" src={"http://golearntocode.com/images/cards/"+ this.props.card + ".png"} /></h1>
        </div>
      )
    }
  })

  var Card3 = React.createClass({
    render: function() {
      return(
        <div>
          <h1><img className="img-responsive" src={"http://golearntocode.com/images/cards/"+ this.props.card + ".png"} /></h1>
        </div>
      )
    }
  })

  var Card3 = React.createClass({
    render: function() {
      return(
        <div>
          <h1><img className="img-responsive" src={"http://golearntocode.com/images/cards/"+ this.props.card + ".png"} /></h1>
        </div>
      )
    }
  })

  var Card4 = React.createClass({
    render: function() {
      return(
        <div>
          <h1><img className="img-responsive" src={"http://golearntocode.com/images/cards/"+ this.props.card + ".png"} /></h1>
        </div>
      )
    }
  })

  var Card5 = React.createClass({
    render: function() {
      return(
        <div>
          <h1><img className="img-responsive" src={"http://golearntocode.com/images/cards/"+ this.props.card + ".png"} /></h1>
        </div>
      )
    }
  })

  var App = React.createClass({
    deal: function() {
    this.setState({
      deck: window.getDeck().shuffle()
      })
    },
    getInitialState: function() {
        return {
          deck: window.getDeck()
      }
    },
    render: function() {
      return (
        <div>
          <h1>Welcome to the KIEI-924 Casino!</h1>
          <div className="row">
            <div className="col-sm-2">
              <Card1 card={this.state.deck[0]} />
            </div>
            <div className="col-sm-2">
              <Card2 card={this.state.deck[1]} />
            </div>
            <div className="col-sm-2">
              <Card3 card={this.state.deck[2]} />
            </div>
            <div className="col-sm-2">
              <Card4 card={this.state.deck[3]} />
            </div>
            <div className="col-sm-2">
              <Card5 card={this.state.deck[4]} />
            </div>
              <div className="col-sm-">
              <h1><a href="#" className="btn btn-success" onClick= {this.deal}>Deal</a></h1>
            </div>
              </div>
        </div>
      )
    }
  })
ReactDOM.render(<App />, document.getElementById("app"))
