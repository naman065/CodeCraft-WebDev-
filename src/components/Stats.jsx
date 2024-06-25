import "../css/stats.css"

const Stats = ({ stats }) => {
    // console.log(stats)
    return (
        <ul className="superhero-stats">
            {Object.entries(stats).map(([stat, value]) => (
                // { console.log(stat, value) }
                <li key={stat}>
                    <strong>{stat.charAt(0).toUpperCase() + stat.slice(1)}:</strong> {value}
                </li>
            ))}
        </ul>
    )
}

export default Stats
