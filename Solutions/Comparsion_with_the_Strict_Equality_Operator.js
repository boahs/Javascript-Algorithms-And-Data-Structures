function testStrictTruth(boahs) {
	if (boahs === 41) {
	return "Looks like someones chose the right number";

	}
	return "This is strict! Value MUST be 41!";
}
testStrictTruth(41); // Returns true boolean
testStrictTruth('41'); // Will return the false boolean