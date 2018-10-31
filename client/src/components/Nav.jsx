import React from 'react';
export default class Nav extends React.Component {
  render() {    
    return (
<ul class="nav nav-tabs">
  <li class="nav-item">
    <a class="nav-link active" href="/" data-toggle="tab">Home</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="/auth/allqb" data-toggle="tab">All Quarterbacks</a>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled" href="/auth/myqb">My Tracked QB's</a>
  </li>
  <li class="nav-item dropdown">
    <a class="nav-link dropdown-toggle" role="button" aria-expanded="false" aria-haspopup="true" href="/profile" data-toggle="dropdown">Profile</a>
    <div class="dropdown-menu">
      <a class="dropdown-item" href="/login">Login</a>
      <a class="dropdown-item" href="/">Logout</a>
      <a class="dropdown-item" href="/auth/signup">Sign Up</a>
      <div class="dropdown-divider"></div>
      <a class="dropdown-item" href="https://www.espn.com/">ESPN?</a>
    </div>
  </li>
</ul>
    );
  }
}