const getSleepHours = day => {
    switch (day) {
        case 'Monday':
            return 8;
        case 'Sunday':
            return 10;
        case 'Tuesday':
            return 9;
        case 'Thursday':
            return 7;
        case 'Friday':
            return 7;
        case 'Saturday':
            return 11;
        case 'Wednesday':
            return 12;
    }
}
console.log(getSleepHours('Wednesday'));

const getActualSleepHours = () =>
    getSleepHours('Monday') + getSleepHours('Sunday') + getSleepHours('Tuesday') +
    getSleepHours('Thursday') + getSleepHours('Friday') + getSleepHours('Saturday') +
    getSleepHours('Wednesday');

const getIdealSleepHours = () => {
    const idealHours = 7.5;
    return idealHours * 7;
};

const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours();

    if (actualSleepHours === idealSleepHours) {
        console.log('user got the perfect amount of sleep');
    } else if (actualSleepHours > idealSleepHours) {
        console.log('user got more sleep than needed');
    } else {
        console.log('user should get some rest.');
    }
    if (actualSleepHours < idealSleepHours) {
        console.log('You got ' + (idealSleepHours - actualSleepHours) +
            ' hour(s) less sleep than you needed this week. Get some rest.');
    }
}

calculateSleepDebt();