<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
	<meta charset="ISO-8859-1">
	<title>Insert title here</title>
    <link rel="Stylesheet" href="css/bootstrap.min.css">
    <link rel="Stylesheet" href="css/style.css">
</head>
<body>
	<h2>CRUD with AJAX</h2>
	<ul class="list-group">
		<li class="list-group-item list-group-item-action"><a href="create.jsp">Create</a></li>
		<li class="list-group-item list-group-item-action dropdown"><a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">Read <span class="caret"></span></a>
			<ul class="dropdown-menu" role="menu">
				<li class="dropdown-item"><a href="generalRead.js">General Read</a></li>
		       	<li class="divider"></li>
		       	<li class="dropdown-item"><a href="readIndividual.js">Individual Read</a></li>
			</ul>
		</li>
		<li class="list-group-item list-group-item-action"><a href="update.jsp">Update</a></li>
		<li class="list-group-item list-group-item-action"><a href="delete.jsp">Delete</a></li>
	</ul>
	
	<script src="js/jquery-3.4.1.min.js"></script>
	<script src="js/popper.min.js"></script>
	<script type="text/javascript" src="js/bootstrap.min.js"></script>
    <script type="text/javascript" src="js/script.js"></script>
</body>
</html>