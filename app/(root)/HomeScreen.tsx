"use client"

import { useState, useEffect } from "react"
import { View, Text, ScrollView, StyleSheet, StatusBar, Image, TouchableOpacity } from "react-native"

const BACKEND_URL = "https://cassette-tapes.onrender.com"

interface Track {
  track: {
    name: string
    artists: Array<{ name: string }>
    album: {
      name: string
      images: Array<{ url: string }>
    }
  }
  played_at: string
}

export default function HomeScreen() {
  const [recentTracks, setRecentTracks] = useState<Track[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchRecentlyPlayed()
  }, [])

  const fetchRecentlyPlayed = async () => {
    try {
      const response = await fetch(`${BACKEND_URL}/dashboard`)
      if (response.ok) {
        const data = await response.json()
        setRecentTracks(data.recent_tracks || [])
      }
    } catch (error) {
      console.error("Error fetching recently played:", error)
      // Mock data for demo
      setRecentTracks([
        {
          track: {
            name: "Tabula Rosa",
            artists: [{ name: "Earl Sweatshirt" }],
            album: {
              name: "Album Name",
              images: [{ url: "/abstract-soundscape.png" }],
            },
          },
          played_at: "2024-01-01T12:00:00Z",
        },
        {
          track: {
            name: "plz don't cut my wings",
            artists: [{ name: "MIKE" }],
            album: {
              name: "Album Name",
              images: [{ url: "/abstract-soundscape.png" }],
            },
          },
          played_at: "2024-01-01T11:30:00Z",
        },
        {
          track: {
            name: "allstar",
            artists: [{ name: "MIKE" }],
            album: {
              name: "Album Name",
              images: [{ url: "/abstract-soundscape.png" }],
            },
          },
          played_at: "2024-01-01T11:00:00Z",
        },
      ])
    } finally {
      setLoading(false)
    }
  }

  const renderTrack = (track: Track, index: number) => (
    <View key={index} style={styles.trackItem}>
      <Image
        source={{ uri: track.track.album.images[0]?.url || "/abstract-soundscape.png" }}
        style={styles.albumArt}
      />
      <View style={styles.trackInfo}>
        <Text style={styles.trackName}>{track.track.name}</Text>
        <Text style={styles.artistName}>{track.track.artists[0]?.name}</Text>
      </View>
      <TouchableOpacity style={styles.playButton}>
        <Text style={styles.playIcon}>▶</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.moreButton}>
        <Text style={styles.moreIcon}>⋯</Text>
      </TouchableOpacity>
    </View>
  )

  if (loading) {
    return (
      <View style={[styles.container, styles.centered]}>
        <Text style={styles.loadingText}>Loading...</Text>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#000" />

      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <View style={styles.logoContainer}>
            <Text style={styles.logo}>C</Text>
          </View>
          <View style={styles.searchContainer}>
            <Text style={styles.searchIcon}>🔍</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.profileButton}>
          <Text style={styles.profileIcon}>👤</Text>
        </TouchableOpacity>
      </View>

      {/* Genre Tabs */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.genreTabs}>
        {["All", "Rap", "Pop", "Rock", "RnB", "Trap", "Country"].map((genre) => (
          <TouchableOpacity key={genre} style={styles.genreTab}>
            <Text style={[styles.genreText, genre === "All" && styles.activeGenre]}>{genre}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <ScrollView style={styles.content}>
        {/* Trending Live Shares */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Trending Live Shares</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>
            {[1, 2, 3].map((item) => (
              <View key={item} style={styles.liveShareItem}>
                <Image
                  source={{ uri: `/placeholder.svg?height=120&width=120&query=trending album ${item}` }}
                  style={styles.liveShareImage}
                />
                <View style={styles.liveShareOverlay}>
                  <View style={styles.liveBadge}>
                    <Text style={styles.liveText}>LIVE</Text>
                  </View>
                  <TouchableOpacity style={styles.shareButton}>
                    <Text style={styles.shareIcon}>↗</Text>
                  </TouchableOpacity>
                </View>
              </View>
            ))}
          </ScrollView>
        </View>

        {/* Top Charting Shares / Recently Played */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>You Recently Played</Text>
          {recentTracks.map((track, index) => renderTrack(track, index))}
        </View>
      </ScrollView>

      {/* Bottom Player */}
      <View style={styles.bottomPlayer}>
        <TouchableOpacity style={styles.playerButton}>
          <Text style={styles.playerIcon}>🔄</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.playerButton}>
          <Text style={styles.playerIcon}>⏮</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.playPauseButton}>
          <Text style={styles.playPauseIcon}>▶</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.playerButton}>
          <Text style={styles.playerIcon}>⏭</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.playerButton}>
          <Text style={styles.playerIcon}>🔀</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  centered: {
    justifyContent: "center",
    alignItems: "center",
  },
  loadingText: {
    color: "#fff",
    fontSize: 16,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 50,
    paddingBottom: 20,
  },
  headerLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  logoContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#FFD700",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
  },
  logo: {
    color: "#000",
    fontSize: 20,
    fontWeight: "bold",
  },
  searchContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#333",
    justifyContent: "center",
    alignItems: "center",
  },
  searchIcon: {
    fontSize: 16,
  },
  profileButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#333",
    justifyContent: "center",
    alignItems: "center",
  },
  profileIcon: {
    fontSize: 16,
  },
  genreTabs: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  genreTab: {
    marginRight: 20,
  },
  genreText: {
    color: "#666",
    fontSize: 16,
  },
  activeGenre: {
    color: "#fff",
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  section: {
    marginBottom: 30,
  },
  sectionTitle: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 15,
  },
  horizontalScroll: {
    marginBottom: 10,
  },
  liveShareItem: {
    width: 120,
    height: 120,
    marginRight: 15,
    position: "relative",
  },
  liveShareImage: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
  },
  liveShareOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "space-between",
    padding: 10,
  },
  liveBadge: {
    backgroundColor: "rgba(255, 0, 0, 0.8)",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
    alignSelf: "flex-start",
  },
  liveText: {
    color: "#fff",
    fontSize: 10,
    fontWeight: "bold",
  },
  shareButton: {
    backgroundColor: "#FFD700",
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "flex-end",
  },
  shareIcon: {
    color: "#000",
    fontSize: 16,
    fontWeight: "bold",
  },
  trackItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
  },
  albumArt: {
    width: 50,
    height: 50,
    borderRadius: 8,
    marginRight: 15,
  },
  trackInfo: {
    flex: 1,
  },
  trackName: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "500",
  },
  artistName: {
    color: "#666",
    fontSize: 14,
    marginTop: 2,
  },
  playButton: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  playIcon: {
    color: "#fff",
    fontSize: 16,
  },
  moreButton: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  moreIcon: {
    color: "#666",
    fontSize: 20,
  },
  bottomPlayer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  playerButton: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 10,
  },
  playerIcon: {
    fontSize: 20,
  },
  playPauseButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#FFD700",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 15,
  },
  playPauseIcon: {
    color: "#000",
    fontSize: 24,
  },
})
