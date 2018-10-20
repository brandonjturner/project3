import React from 'react';
export default class Nav extends React.Component {
  render() {    
    return (
<ul class="nav nav-tabs">
  <li class="nav-item">
    <a class="nav-link active" href="#home" data-toggle="tab">Home</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#profile" data-toggle="tab">Profile</a>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled" href="#">Disabled</a>
  </li>
  <li class="nav-item dropdown">
    <a class="nav-link dropdown-toggle" role="button" aria-expanded="false" aria-haspopup="true" href="#" data-toggle="dropdown">Dropdown</a>
    <div class="dropdown-menu">
      <a class="dropdown-item" href="#">Action</a>
      <a class="dropdown-item" href="#">Another action</a>
      <a class="dropdown-item" href="#">Something else here</a>
      <div class="dropdown-divider"></div>
      <a class="dropdown-item" href="#">Separated link</a>
    </div>
  </li>
</ul>
    );
  }
}