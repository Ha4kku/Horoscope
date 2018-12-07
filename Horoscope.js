//Main Code That Tells The Visitor Their Horoscope
/* Aquarius = jan 20 - feb 18 #1
 * Pisces = Feb 19 - March 20 #2
 * Aries = March 21 - April 19 #3
 * Taurus = April 20 - May 20 #4
 * Gemini = May 21 - June 22 #5
 * Cancer = June 21 - July 22 #6
 * Leo = July 23 - August 22 #7
 * Virgo = August 23 - Sept 22 #8
 * Libra = Sept 23 - October 22 #9
 * Scorpio = Oct 23 - Nov 21 #10
 * Sagittarius = Nov 21 - Dec 21 #11
 * Capricorn = Dec 22 - Jan 19 #12
 */
function whichname(year) {
    // rat
    if (year == 1972 || year == 1984 || year == 1996 || year == 2008) {
        return 1;
    }
    //ox
    if (year == 1973 || year == 1985 || year == 1997 || year == 2009) {
        return 2;
    }
    // tiger
    if (year == 1974 || year == 1986 || year == 1998 || year == 2010) {
        return 3;
    }
    // rabbit
    if (year == 1975 || year == 1987 || year == 1999 || year == 2011) {
        return 4;
    }
    // dragon
    if (year == 1976 || year == 1988 || year == 2000 || year == 2012) {
        return 5;
    }
    // snake
    if (year == 1977 || year == 1989 || year == 2001 || year == 2013) {
        return 6;
    }
    // horse
    if (year == 1978 || year == 1990 || year == 2002 || year == 2014) {
        return 7;
    }
    // goat
    if (year == 1979 || year == 1991 || year == 2003 || year == 2015) {
        return 8;
    }
    // monkey
    if (year == 1980 || year == 1992 || year == 2004 || year == 2016) {
        return 9;
    }
    // rooster
    if (year == 1981 || year == 1993 || year == 2005 || year == 2017) {
        return 10;
    }
    // dog
    if (year == 1982 || year == 1994 || year == 2006 || year == 2018) {
        return 11;
    }
    // pig
    if (year == 1983 || year == 1995 || year == 2007) {
        return 12;
    }
}
function whichanimal(year) {
    x = whichname(year);

    if (x == 1) {
        return "rat";
    }
    if (x == 2) {
        return "ox";
    }
    if (x == 3) {
        return "tiger";
    }
    if (x == 4) {
        return "rabbit"
    }
    if (x == 5) {
        return "dragon";
    }
    if (x == 6) {
        return "snake";
    }
    if (x == 7) {
        return "horse";
    }
    if (x == 8) {
        return "goat";
    }
    if (x == 9) {
        return "monkey";
    }
    if (x == 10) {
        return "rooster";
    }
    if (x == 11) {
        return "dog";
    }
    if (x == 12) {
        return "pig";
    }
}
function zodiacsent(year){
    d = whichanimal(year);

    if(d == "rat"){
        return "Rats are quick-witted,resourceful, versatile, kind, smart, and lovely" +
            "With strong intuition and quick responses, Rats always easily adapt themselves to a new environment." +
            " With rich imaginations and sharp observations, they can take advantage of various opportunities well." +
            " Rats have strong curiosity, so they tend to try their hands at anything, and they can deal with tasks" +
            " skillfully.";
    }
    if(d == "ox"){
        return "Oxes are known for diligence, dependability, strength and determination. Having an honest nature," +
            " Oxes have a strong patriotism for their country, have ideals and ambitions for life, and attach" +
            " importance to family and work.";
    }
    if(d == "tiger"){
        return "People born in the year of the Tiger are brave, competitive, unpredictable, and self-confident. " +
            "They are very charming and well-liked by others. But sometimes they are likely to be impetuous," +
            " irritable, and overindulged.";

    }
    if(d == "rabbit"){
        return "Rabbits tend to be gentle, quiet, elegant, and alert; quick, skillful, kind, and patient;" +
            " and particularly responsible. However, they might be superficial, stubborn, melancholy, and" +
            " overly-discreet. Generally speaking, people who belong to the Rabbit zodiac sign have likable" +
            " characters.";
    }
    if(d == "dragon"){
        return "Among Chinese zodiac animals, the Dragon is the sole imaginary animal. The Dragon is the most vital " +
            "and powerful beast in the Chinese zodiac, although with an infamous reputation for being a hothead " +
            "and possessing a sharp tongue. In ancient times, people thought that Dragons could control everything" +
            " in the world with their character traits of dominance and ambition.";
    }
    if(d == "snake"){
        return "In Chinese culture, the Snake is the most enigmatic animal among the twelve zodiac animals." +
            " People born in a year of the Snake are supposed to be the most intuitive." + "Snakes tend to act " +
            "according to their own judgments, even while remaining the most private and reticent. They ar" +
            "e determined to accomplish their goals and hate to fail.";

    }
    if(d == "horse"){
        return "People born in a year of the Horse are extremely animated, active and energetic. Horses love to be" +
            " in a crowd, and they can usually be seen on such occasions as concerts, theater performances," +
            " meetings, sporting events, and parties.";
    }
    if(d == "goat") {
        return "They have very delicate thoughts, strong creativity, and perseverance, and acquire professional skills" +
            " well. Although they look gentle on the surface, they are tough on the inside, always insisting on their " +
            "own opinions in their minds. They have strong inner resilience and excellent defensive instincts.";
    }
    if(d == "monkey"){
        return "Although they are clever and creative, Monkeys can't always exhibit their talents properly. They like" +
            " to accept challenges and prefer urban life to rural.";

    }
    if(d == "rooster"){
        return "People born in a year of the Rooster are very observant. Hardworking, resourceful, courageous, and " +
            "talented, Roosters are very confident in themselves. Roosters are always active, amusing, and popular" +
            " within a crowd. Roosters are talkative, outspoken, frank, open, honest, and loyal individuals. They " +
            "like to be the center of attention and always appear attractive and beautiful.";
    }
    if(d == "dog"){
        return "Dogs are loyal and honest, amiable and kind, cautious and prudent. Due to having a strong sense of loyalty and sincerity, Dogs will do everything for the person who they think is most important. As Dogs are not good at communication, it is difficult for them to convey their thoughts to others. Therefore, Dogs tend to leave others with the impression that they have a stubborn personality."
    }
}


function whichhoro(day, month) {
    // Aquarius
    if(month == 1 && day >= 20 ){
        return 1;
    }
    //Aquarius
    if(month == 2 && day <= 18 ){
        return 1;
    }
    //Pisces
    if(month == 2 && day >= 19 && day <= 28){
        return 2;
    }
    //Pisces
    if(month == 3 && day <= 20 ){
        return 2;
    }
    //Aries
    if(month == 3 && day >= 21 ){
        return 3;
    }
    //Aries
    if(month == 4 && day <= 19 ){
        return 3;
    }
    //Taurus
    if(month == 4 && day >= 20 ){
        return 4;
    }
    // Taurus
    if(month == 5 && day <= 20 ){
        return 4;
    }
    //Gemini
    if(month == 5 && day >= 21 ){
        return 5;
    }
    //Gemini
    if(month == 6 && day <= 22 ){
        return 5;
    }
    //Cancer
    if(month == 6 && day >= 23 ){
        return 6;
    }
    //Cancer
    if(month == 7 && day <= 22 ){
        return 6;
    }
    //Leo
    if(month == 7 && day >= 23 ){
        return 7;
    }
    //Leo
    if(month == 8 && day <= 22 ){
        return 7;
    }
    //Virgo
    if(month == 8 && day >= 23 ){
        return 8;
    }
    //Virgo
    if(month == 9 && day <= 22 ){
        return 8;
    }
    //Libra
    if(month == 9 && day >= 23 ){
        return 9;
    }
    //Libra
    if(month == 10 && day <= 22 ){
        return 9;
    }
    //Scorpio
    if(month == 10 && day >= 23 ){
        return 10;
    }
    //Scorpio
    if(month == 11 && day <= 21 ){
        return 10;
    }
    //Sagittarius
    if(month == 11 && day >= 22 ){
        return 11;
    }
    //Sagittarius
    if(month == 12 && day <= 21 ){
        return 11;
    }
    //Capricorn
    if(month == 12 && day >= 22 ){
        return 12;
    }
    //Capricorn
    if(month == 1 && day <= 19 ){
        return 12;
    }
}


function whatsign(day, month) {
    var x = whichhoro(day, month);
    var horo = "";

    if(x == 1){
        horo = "Aquarius";
    }
    if(x == 2){
        horo = "Pisces";
    }
    if(x == 3){
        horo = "Aries";
    }
    if(x == 4){
        horo = "Taurus";
    }
    if(x == 5){
        horo = "Gemini";
    }
    if(x == 6){
        horo = "Cancer";
    }
    if(x == 7){
        horo = "Leo";
    }
    if(x == 8){
        horo = "Virgo";
    }
    if(x == 9){
        horo = "Libra";
    }
    if(x == 10){
        horo = "Scorpio";
    }
    if(x == 11){
        horo = "Sagittarius";
    }
    if(x == 12){
        horo = "Capricorn";
    }
    return horo;
}

function checksign(day, month) {
    var x = whatsign(day, month);
    var sign = "";

    if (x == "Aquarius"){

        sign = "    Aquarius, sign of the Water Bearer. " +
        "There are still some battles to attend to and Mars won’t leave your sign until you are done" +
        " with certain issues that require strength and endurability. You are the one to hold the" +
        " higher ground, but without common sense and practicality, you won’t implement your ideas " +
        "in your surroundings the way you’d like to. Stay stable and think about realistic moves and" +
        " goals this time around."
    }
    if (x == "Pisces"){
        sign = "    Pisces, sign of the Fish. " +
            "Intelligence won’t fail you if you only take enough time to choose the right words to explain" +
            " yourself and express the way you’re feeling. There is no reason to hide or ride against the" +
            " waves that push you forwards. Absorb and metabolize your experiences, but make sure your " +
            "proper action comes as a result.";
    }
    if (x == "Aries"){
        sign = "    Aries, sign of the Flying Ram. " +
            "When we feel brain fatigue, it is a direct result of our emotions, not the mental work" +
            " we commit to. You must think about your limitations and respect emotional boundaries " +
            "along the way, too. They are there to light the way of self-protection and self-care.";
    }
    if (x == "Taurus"){
        sign = "    Taurus, sign of the Wandering Bull. " +
            "“Thankful villages” in the UK are those that had troops leaving to fight in WWI and " +
            "all of them returned alive. When you think about some of your blessings, you will" +
            " remember that there are many things in life to be grateful for and you have a " +
            "foundation for your future moves, however uncertain they might seem.";
    }
    if (x == "Gemini"){
        sign = "    Gemini, sign of the Caring Twins. " +
            "With two paths in front of you, it seems impossible to choose the right one and you " +
            "need a little more time to hold on to personal sense of value and morals to truly " +
            "connect with your mission in life. Don’t push yourself anywhere if things don’t feel " +
            "right.";
    }
    if(x == "Cancer"){
        sign = "    Cancer, sign of the Brave Crab. " +
            "You are aware that a lot of strength hides in your vulnerability and sensitive emotions " +
            "but don’t know how to creatively express them right now. Don’t try too hard, choosing " +
            "to keep your mouth shut if this feels better than speaking your mind.";
    }
    if (x == "Leo"){
        sign = "    Leo, sign of the Lion In The Cave. " +
            "This is a good time to write things down, see how real they feel when they are put " +
            "on paper, and set your goals to a rational level. There is nothing holding you back, " +
            "but your own inner beliefs and your sense of bravery needed to grow.";
    }
    if (x == "Virgo"){
        sign = "    Virgo, sign of the Dissapointed Godess. " +
            "You have a lot of stressful work that is to be balanced with your family life and " +
            "your emotional needs. There is a reason for everything you’ve been through, even if " +
            "this seems hard to grasp on at the moment, and you need purity of intentions and moral" +
            " judgments to pull you through.";
    }
    if (x == "Libra"){
        sign = "    Libra, sign of the Measure of Our Souls. " +
            "The sense of freedom is in the air, and however stressful it might be or as if you " +
            "are pushed into it, you can clearly see its positive sides. Don’t neglect the self-worth " +
            "you have discovered in the past several months and remind yourself why you should be " +
            "your own priority at all times.";
    }
    if (x == "Scorpio"){
        sign = "    Scorpio, sign of the Scorpion. " +
            "You wish things to get personal, so you can shake them up and prove your point to " +
            "those who don’t listen, but you don’t seem to realize that conflict isn’t really necessary " +
            "at the moment. Slow down, keep your thoughts to yourself for as long as you need to in " +
            "order to form direct and specific ways of expression that will truly make a change.";
    }
    if (x == "Sagittarius"){
        sign = "    Sagittarius, sign of the Archer. " +
            "The impact of Jupiter in Sagittarius will be grand, and no representative of this " +
            "Sun sign will miss its new signals and its call for happiness and joy. This is a time " +
            "of humor and large hopes, when any goal can be reached if you are persistent and optimistic " +
            "enough. Just don’t lose focus from the direction you choose in the next couple of days.";
    }
    if (x == "Capricorn"){
        sign = "Capricorn, sign of the Goat of Fear" +
            "Aware that you have reached the end of the road, you don’t really know where to move next." +
            " This is a day for contemplation on new solutions, when you are to rely on social contacts that" +
            " are deep enough and lasting for years so you can form a foundation for all future actions."

    }
    return sign;
}
function checkName(x) {
    if (x == "") {
        alert("Error 81: Name Box invalid");
        return false;
    }
}
function checkDate(x, y){

    if(y == 2 && x > 28 || y == 4 && x > 30 || y == 6 && x > 30 || y == 9 && x > 30) {
        alert("Error 101: Month Invalid");
        return false;
    }
    
}
function whichImage(day, month) {
    var i = whatsign(day, month);
    if ((i == "Aquarius") || (i == "Cancer") || (i == "Leo") || (i == "Libra") || (i == "Sagittaris" ) || (i == "Scorpio" ) || (i == "Taurus" ) || (i == "Virgo")) {
        return "Horo%20img/" + i + ".jpeg";
    }
    if ((i == "Aries") || (i == "Capricorn") || (i == "Pisces")) {
        return "Horo%20img/" + i + ".gif";
    }
    if (i == "Gemini"){
        return "Horo%20img/" + i + ".jpg";
    }

}
function zodiacImg(year){
    var j = whichanimal(year);
    if(j == "tiger"){
        return "Zodiac/" + j + " (1)" + ".png";
    }
    return "Zodiac/" + j + ".png";
}

function buttonpush() {
    var year = document.getElementById("year").value;
    var day = document.getElementById("day").value;
    var month = document.getElementById("month").value;
    var name = document.getElementById("name").value;
    checkDate(day, month);
    checkName(name);

    var zodiac = document.getElementById("animal").innerHTML = whichanimal(year);
    var horo = whatsign(day, month);
    // check age for zodiac

    document.getElementById("sign").innerHTML = "Hi " + name + ", your horoscope is: " + horo;
    document.getElementById("Horo%20img").src = whichImage(day, month);
    var horoscope = document.getElementById("horoscope").innerHTML = checksign(day, month);
    document.getElementById("animal").innerHTML = "And your zodiac sign is, " + zodiac;
    document.getElementById("Zodiac").src = zodiacImg(year);


}