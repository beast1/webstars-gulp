<!-- DEV -->
<!-- <%--
Created by IntelliJ IDEA.
User: Zaborov-y
Date: 14.01.13
Time: 14:07
To change this template use File | Settings | File Templates.
--%> -->
<!-- <%@ page contentType="text/html;charset=UTF-8" language="java" %> -->
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<!-- <%--<%@ taglib uri="http://java.sun.com/jstl/core" prefix="c" %>--%> -->
<html>
  <head>
    <title>Ошибка</title>
     <link rel="stylesheet" href="css/common.css">
  </head>
  <body>
    <div class="note">
      <div class="note_color_success"><%=request.getsession().getattribute("errtext")%></%=request.getsession().getattribute("errtext")%></div>
      <div class="note_color_error"><%=request.getsession().getattribute("successtext")%></%=request.getsession().getattribute("successtext")%></div>
      <div class="alink">
      <br>
      <%= request.getsession().getattribute("furl")%>
      <br>
    </div>
  </div></body>
</html>