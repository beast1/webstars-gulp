<%--
  Created by IntelliJ IDEA.
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<jsp:forward page="/redirect"></jsp:forward>
<html>
    <head>
        <script type="text/javascript">
            window.history.forward();
            function noBack() {
                window.history.forward();
            }</script>

    </head>
    <BODY onload="noBack();" onpageshow="if (event.persisted) noBack();" onunload=""></body>
</html>