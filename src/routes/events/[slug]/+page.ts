import EVENTS from '$lib/projects.params';
import { supabase } from "$lib/supabaseClient";



export async function load({ params }: { params: Record<string, string> }) {
	if (params.slug) {
		const event = EVENTS.find((item) => {
			return item.slug === params.slug;
		});

		return { event };
	}
}
