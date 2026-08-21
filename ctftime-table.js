async function init() {
	const body = document.getElementById('ctftime-table-body');
	if (!body) return;

	const res = await fetch('ctftime-placements.json');
	const { events } = await res.json();

	body.innerHTML = events.map((e) => `
		<tr>
			<td>${e.date}</td>
			<td>#${e.place}</td>
			<td><a href="${e.url}" target="_blank" rel="noopener">${e.event}</a></td>
			<td>${e.rating_points.toFixed(2)}</td>
		</tr>
	`).join('');
}

init();
