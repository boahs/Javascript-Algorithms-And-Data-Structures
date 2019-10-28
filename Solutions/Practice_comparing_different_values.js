function compareEqualityStrict(a, b) {
	if(a === b) {
	return "True, brother! True.";

	}
	return "Made a mistake did we?";
}
compareEqualityStrict(10, 10); // We're comparing a, and b. Which in this case is 10, and 10. Both true. 
compareEqualitySTrict(10, "10"); // This would be false. === being strict