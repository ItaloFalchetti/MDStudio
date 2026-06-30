import { useEffect, useState } from "react";

export interface InstagramPost {
  id: string;
  media_type: "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM";
  media_url: string;
  thumbnail_url?: string;
  permalink: string;
  caption?: string;
}

interface FeedState {
  posts: InstagramPost[];
  loading: boolean;
  error: string | null;
}

export function useInstagramFeed() {
  const [state, setState] = useState<FeedState>({ posts: [], loading: true, error: null });

  useEffect(() => {
    fetch("/api/instagram")
      .then((res) => {
        if (!res.ok) throw new Error(`Error ${res.status}`);
        return res.json();
      })
      .then((data) => {
        if (data.error) throw new Error(data.error);
        const posts: InstagramPost[] = (data.data ?? []).filter(
          (p: InstagramPost) => p.media_type === "IMAGE" || p.media_type === "CAROUSEL_ALBUM"
        );
        setState({ posts, loading: false, error: null });
      })
      .catch((err: Error) => {
        setState({ posts: [], loading: false, error: err.message });
      });
  }, []);

  return state;
}
