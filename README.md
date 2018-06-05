<h1 align="center">
react-chopper
<br>
<img src="https://raw.githubusercontent.com/pawarvijay/react-chopper/master/helicopter.svg?sanitize=true" width="300" height="200"/>
</h1>

<h3 align="center">Two way binding in react with javascript proxies</h3>

[![CircleCI status](https://circleci.com/gh/pawarvijay/react-chopper/tree/master.svg?style=shield&circle-token=:circle-token)](https://circleci.com/gh/pawarvijay/react-chopper/tree/master)
[![Coverage Status](https://coveralls.io/repos/github/pawarvijay/react-chopper/badge.svg?branch=master&style=flat)](https://coveralls.io/github/pawarvijay/react-chopper?branch=master)

## [Example Live](https://stackblitz.com/edit/simple-react-chopper) ,  [Complex example](https://stackblitz.com/edit/complex-react-chopper),  [Super complex example](https://stackblitz.com/edit/super-complex-react-chopper)

 Below code does not contains ```this.setState```
 
```jsx
import React, { Component } from 'react';
import { render } from 'react-dom';
import ReactChopper from 'react-chopper';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'React'
    };
    this.modal = ReactChopper(this.state, this);
  }
  render() {
    return (
      <div>
        <input
          name={this.modal.name}
          onChange={e => this.modal.name = e.target.value} />
        <p>
          Bang Bang {this.modal.name}
        </p>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));

```

## Aim 

Not to develop insecurity by making it higherorder component and wrapping whole react component like other libraries. 

Make every develop know whats under the hood its Javascript Proxies.

It will be doing only task only , is to watch any changes on target object and do setState underthehood.

This lib won't be doing multiple task like other react libs do
Eg : redux-form , react-form , react-validation ect .. developers pickup these libs for validation and land up doing state management , which is filled up with its limitations and ultimately creating spagetti code. 

## TODO

- [x] Write initial testcases
- [x] Integrate with `circleci`
- [x] Add coveralls support
- [x] A Simple demo sandbox app made from `react-chopper`
- [x] A Complex computation demo sandbox app made from `react-chopper`
- [x] A Super complex computation demo sandbox app made from `react-chopper`
- [x] Documentation about
- [x] Testcase that uses `react-chopper` lib from npm
- [ ] Write some more Complex testcase scenarios for testing
- [ ] Use `rollupjs` instead of `webpack`
- [ ] Create seperate `develop` for all developer experiments
- [ ] Setup mechanism to push tested code to `master branch` 
- [ ] Deploy package on npm from `circleci` from `master branch`
