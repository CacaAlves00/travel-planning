export function convertToHoursAndMinutes(hours: number): [string, string] {
    const roundedHours = Math.floor(hours)
    const minutes = Math.round((hours - roundedHours) * 60)

    const hoursString = roundedHours.toString().padStart(2, '0')
    const minutesString = minutes.toString().padStart(2, '0')

    return [hoursString, minutesString]
}
