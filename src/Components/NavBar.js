.nav-enlace{
  display: inline-block;
  background: salmon;
  color:#fff;
  padding: 10px 30px;
  text-decoration: none;
}
.nav-enlace:hover{
  background: rosybrown;
}
nav{
  background: rebeccapurple;
  padding: 10px;
  display: flex;
  justify-content: space-around; 
}
.nav-boton{
  background: salmon;
  color: #fff;
  padding: 10px 0;
  border: 2px solid #fff;
  display: none;
}

@media (max-width: 500px) {
  nav{
      background: black;
      flex-direction: column;
  }
  .nav-enlace{
      margin: 10px 0;
  }
  .nav-boton{
      display: inline-block;
  }
  .desaparece{
      display: none;
  }
}