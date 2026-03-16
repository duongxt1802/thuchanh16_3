import React, { useState } from "react";
import {
  View, Text, ScrollView, TouchableOpacity, TextInput,
  StyleSheet, StatusBar, SafeAreaView, Image, Switch, Dimensions
} from "react-native";

const W = Dimensions.get("window").width;

const C = {
  bg: "#FFFFFF",
  bgYellow: "#FFF9E6",
  purple: "#4F46E5",
  purpleLight: "#EEF2FF",
  yellow: "#F5A623",
  green: "#4CAF50",
  greenLight: "#E8F5E9",
  text: "#1A1A1A",
  textGray: "#888888",
  border: "#F0F0F0",
  white: "#FFFFFF",
};

const IMG = {
  avatar:  require('./assets/avatar.png'),
  avatar1: require('./assets/ava.png'),
  burger:  require('./assets/b1.png'),
  burger2: require('./assets/burger.png'),
  burger3: require('./assets/b2.png'),
  burger4: require('./assets/b3.png'),
  burger5: require('./assets/b4.png'),
  pizza:   require('./assets/p1.png'),
  pizza2:  require('./assets/pizza.png'),
  drink:   require('./assets/drink.png'),
  rice:    require('./assets/rice.png'),
  card:    require('./assets/card.png'),
};

// ── HOME SCREEN ───────────────────────────────────────────────────────────────
function HomeScreen({ onNavigate }) {
  const [activeCat, setActiveCat] = useState(1);
  const [searchText, setSearchText] = useState("");

  const categories = [
    { id: 1, name: "PIZZA",  img: IMG.pizza2 },
    { id: 2, name: "BURGER", img: IMG.burger2 },
    { id: 3, name: "DRINK",  img: IMG.drink },
    { id: 4, name: "RICE",   img: IMG.rice },
  ];

  const popularItems = [
    { id: 1, name: "BURGER", img: IMG.burger },
    { id: 2, name: "PIZZA",  img: IMG.pizza },
  ];

  return (
    <ScrollView
      style={s.screen}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingBottom: 20, paddingTop: 30 }}
    >
      {/* Header */}
      <View style={s.homeHeader}>
        <Image source={IMG.avatar} style={s.avatarImg} />
        <View style={{ alignItems: "center", flex: 1 }}>
          <Text style={s.yourLocation}>Your Location</Text>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Image
              source={{ uri: "https://cdn-icons-png.flaticon.com/32/684/684908.png" }}
              style={{ width: 14, height: 14, marginRight: 4, tintColor: C.purple }}
            />
            <Text style={s.locationCity}>Savar, Dhaka</Text>
          </View>
        </View>
        <TouchableOpacity style={s.notifBox}>
          <Image
            source={{ uri: "https://cdn-icons-png.flaticon.com/64/3239/3239952.png" }}
            style={{ width: 22, height: 22, tintColor: C.purple }}
          />
        </TouchableOpacity>
      </View>

      {/* Search Bar */}
      <View style={s.searchContainer}>
        <Image
          source={{ uri: "https://cdn-icons-png.flaticon.com/64/149/149852.png" }}
          style={{ width: 18, height: 18, tintColor: C.white, marginRight: 8 }}
        />
        <TextInput
          value={searchText}
          onChangeText={setSearchText}
          placeholder="Search your food..."
          placeholderTextColor="rgba(255,255,255,0.7)"
          style={s.searchInput}
        />
        <TouchableOpacity style={s.filterBtn}>
          <Image
            source={{ uri: "https://cdn-icons-png.flaticon.com/64/1163/1163497.png" }}
            style={{ width: 18, height: 18, tintColor: C.white }}
          />
        </TouchableOpacity>
      </View>

      {/* Categories */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingHorizontal: 20, paddingVertical: 16 }}>
        {categories.map((c, i) => (
          <TouchableOpacity
            key={c.id}
            onPress={() => setActiveCat(c.id)}
            style={[s.catItem, activeCat === c.id && s.catItemActive, i < categories.length - 1 && { marginRight: 12 }]}
          >
            <Image source={c.img} style={s.catImg} />
            <Text style={[s.catLabel, activeCat === c.id && { color: C.white }]}>{c.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Hero Banner */}
      <View style={s.heroBanner}>
        <Image source={IMG.burger4} style={s.heroBannerBg} blurRadius={1} />
        <View style={s.heroBannerOverlay} />
        <View style={s.heroBannerContent}>
          <View style={{ flex: 1 }}>
            <Text style={s.heroTitle}>BURGER</Text>
            <Text style={s.heroSub}>Today's Hot offer</Text>
            <View style={{ flexDirection: "row", alignItems: "center", marginTop: 6 }}>
              <View style={{ flexDirection: "row", marginRight: 6 }}>
                {[IMG.avatar, IMG.avatar1].map((a, i) => (
                  <Image key={i} source={a} style={[s.heroAvatarThumb, { marginLeft: i > 0 ? -8 : 0 }]} />
                ))}
              </View>
              <Image
                source={{ uri: "https://cdn-icons-png.flaticon.com/32/1828/1828884.png" }}
                style={{ width: 13, height: 13, tintColor: C.yellow, marginRight: 3 }}
              />
              <Text style={s.heroRating}>4.9 (3k+ Rating)</Text>
            </View>
          </View>
          <Image source={IMG.burger4} style={s.heroBurgerImg} />
        </View>
        <View style={s.discountBadge}>
          <Text style={s.discountText}>10%{"\n"}OFF</Text>
        </View>
      </View>

      {/* Dots */}
      <View style={{ flexDirection: "row", justifyContent: "center", marginTop: 12 }}>
        {[0, 1, 2].map(i => (
          <View key={i} style={[s.dot, i === 2 && s.dotActive, i < 2 && { marginRight: 6 }]} />
        ))}
      </View>

      {/* Popular Items */}
      <View style={s.sectionHeader}>
        <Text style={s.sectionTitle}>Popular Items</Text>
        <TouchableOpacity><Text style={s.viewAll}>View All</Text></TouchableOpacity>
      </View>

      <View style={s.popularGrid}>
        {popularItems.map((item, i) => (
          <TouchableOpacity key={item.id} style={[s.popularCard, i % 2 === 0 && { marginRight: 12 }]}>
            <Image source={item.img} style={s.popularCardImg} />
            <Text style={s.popularCardName}>{item.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}

// ── CART SCREEN ───────────────────────────────────────────────────────────────
function CartScreen({ onNavigate }) {
  const [qty, setQty] = useState(2);
  const unitPrice = 28;
  const subtotal = unitPrice * qty;
  const delivery = 6.20;
  const total = subtotal + delivery;

  return (
    <ScrollView style={s.screen} showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 30 }}>
      <View style={s.pageHeader}>
        <TouchableOpacity style={s.backCircle} onPress={() => onNavigate("home")}>
          <Image source={{ uri: "https://cdn-icons-png.flaticon.com/64/271/271220.png" }} style={{ width: 16, height: 16, tintColor: C.text }} />
        </TouchableOpacity>
        <Text style={s.pageTitle}>Shopping Cart</Text>
        <TouchableOpacity style={s.backCircle}>
          <Image source={{ uri: "https://cdn-icons-png.flaticon.com/64/3096/3096673.png" }} style={{ width: 20, height: 20, tintColor: C.text }} />
        </TouchableOpacity>
      </View>

      <View style={s.cartFoodCard}>
        <Image source={IMG.burger4} style={s.cartMainImg} />
        <View style={s.cartDiscountBadge}>
          <Text style={s.cartDiscountText}>10%{"\n"}OFF</Text>
        </View>
        <View style={s.thumbRow}>
          {[IMG.burger, IMG.burger4, IMG.burger5].map((img, i) => (
            <View key={i} style={[s.thumbItem, i === 0 && { borderColor: C.purple, borderWidth: 2 }]}>
              <Image source={img} style={s.thumbImg} />
            </View>
          ))}
        </View>
      </View>

      <View style={s.cartInfoBox}>
        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 6 }}>
          <Text style={s.cartFoodName}>BURGER</Text>
          <Text style={s.cartFoodPrice}>$28</Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Image source={{ uri: "https://cdn-icons-png.flaticon.com/32/1828/1828884.png" }} style={{ width: 14, height: 14, tintColor: C.yellow, marginRight: 4 }} />
            <Text style={s.cartRating}>4.9 (3k+ Rating)</Text>
          </View>
          <View style={s.qtyRow}>
            <TouchableOpacity onPress={() => setQty(q => q + 1)} style={s.qtyAddBtn}>
              <Image source={{ uri: "https://cdn-icons-png.flaticon.com/64/8832/8832108.png" }} style={{ width: 20, height: 20, tintColor: C.white }} />
            </TouchableOpacity>
            <Text style={s.qtyNum}>0{qty}</Text>
            <TouchableOpacity onPress={() => setQty(q => Math.max(1, q - 1))} style={s.qtyMinusBtn}>
              <Text style={{ color: C.text, fontSize: 20, fontWeight: "700" }}>−</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={{ flexDirection: "row", paddingHorizontal: 20, marginBottom: 16 }}>
        <View style={s.deliveryBox}>
          <Image source={{ uri: "https://cdn-icons-png.flaticon.com/64/684/684908.png" }} style={{ width: 20, height: 20, tintColor: C.green, marginRight: 10 }} />
          <View>
            <Text style={s.deliveryLabel}>Delivery Address</Text>
            <Text style={s.deliveryValue}>Dhaka, Bangladesh</Text>
          </View>
        </View>
        <TouchableOpacity style={s.editBtn}>
          <Image source={{ uri: "https://cdn-icons-png.flaticon.com/64/1250/1250615.png" }} style={{ width: 20, height: 20, tintColor: C.purple }} />
        </TouchableOpacity>
      </View>

      <View style={s.paymentRow}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image source={IMG.card} style={s.cardImg} />
          <Text style={s.paymentLabel}>Payment Method</Text>
        </View>
        <TouchableOpacity style={s.changeBtn}>
          <Text style={s.changeBtnText}>Change</Text>
        </TouchableOpacity>
      </View>

      <View style={s.summaryBox}>
        <Text style={s.summaryTitle}>Checkout Summary</Text>
        <View style={s.summaryRow}>
          <Text style={s.summaryLabel}>Subtotal ({qty})</Text>
          <Text style={s.summaryValue}>${subtotal}</Text>
        </View>
        <View style={s.summaryRow}>
          <Text style={s.summaryLabel}>Delivery Fee</Text>
          <Text style={s.summaryValue}>${delivery.toFixed(2)}</Text>
        </View>
        <View style={[s.summaryRow, { borderTopWidth: 1, borderTopColor: C.border, paddingTop: 10, marginTop: 4 }]}>
          <Text style={[s.summaryLabel, { fontWeight: "700", color: C.text }]}>Payable Total</Text>
          <Text style={[s.summaryValue, { color: C.purple, fontWeight: "800", fontSize: 16 }]}>${total.toFixed(1)}</Text>
        </View>
      </View>

      <TouchableOpacity style={s.confirmBtn}>
        <Text style={s.confirmBtnText}>Confirm Order</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

// ── PROFILE SCREEN ────────────────────────────────────────────────────────────
function ProfileScreen({ onNavigate }) {
  const [darkMode, setDarkMode] = useState(true);

  const menuItems = [
    { iconUrl: "https://cdn-icons-png.flaticon.com/64/1946/1946488.png", label: "Home" },
    { iconUrl: "https://cdn-icons-png.flaticon.com/64/633/633611.png",   label: "My Card" },
    { iconUrl: "https://cdn-icons-png.flaticon.com/64/2593/2593549.png", label: "Dark Mood", toggle: true },
    { iconUrl: "https://cdn-icons-png.flaticon.com/64/684/684908.png",   label: "Truck Your Order" },
    { iconUrl: "https://cdn-icons-png.flaticon.com/64/2040/2040504.png", label: "Settings" },
    { iconUrl: "https://cdn-icons-png.flaticon.com/64/1828/1828940.png", label: "Help Center" },
  ];

  return (
    <ScrollView style={s.screen} showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 30 }}>
      <View style={s.pageHeader}>
        <TouchableOpacity style={s.backCircle} onPress={() => onNavigate("home")}>
          <Image source={{ uri: "https://cdn-icons-png.flaticon.com/64/271/271220.png" }} style={{ width: 16, height: 16, tintColor: C.text }} />
        </TouchableOpacity>
        <Text style={s.pageTitle}>Profile</Text>
        <View style={{ width: 40 }} />
      </View>

      <View style={s.profileHero}>
        <View style={s.profileAvatarWrap}>
          <View style={s.profileAvatarBorder}>
            <Image source={IMG.avatar} style={s.profileAvatarImg} />
          </View>
          <TouchableOpacity style={s.editAvatarBtn}>
            <Image source={{ uri: "https://cdn-icons-png.flaticon.com/64/1250/1250615.png" }} style={{ width: 14, height: 14, tintColor: C.white }} />
          </TouchableOpacity>
        </View>
        <Text style={s.profileName}>Rakibul Hasan</Text>
        <Text style={s.profileEmail}>rakibhbrand@gmail.com</Text>
      </View>

      <View style={{ paddingHorizontal: 20, marginTop: 8 }}>
        {menuItems.map((item, i) => (
          <TouchableOpacity key={i} style={s.menuItem}>
            <Image source={{ uri: item.iconUrl }} style={[s.menuIconImg, { tintColor: C.textGray }]} />
            <Text style={s.menuLabel}>{item.label}</Text>
            {item.toggle ? (
              <Switch value={darkMode} onValueChange={setDarkMode} trackColor={{ false: "#DDD", true: C.purple }} thumbColor={C.white} />
            ) : (
              <Image source={{ uri: "https://cdn-icons-png.flaticon.com/64/271/271228.png" }} style={{ width: 14, height: 14, tintColor: C.textGray }} />
            )}
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity style={s.logoutBtn}>
        <Text style={s.logoutText}>Log Out</Text>
        <Image source={{ uri: "https://cdn-icons-png.flaticon.com/64/1828/1828479.png" }} style={{ width: 18, height: 18, tintColor: C.white, marginLeft: 8 }} />
      </TouchableOpacity>
    </ScrollView>
  );
}

// ── INBOX SCREEN ──────────────────────────────────────────────────────────────
function InboxScreen() {
  const msgs = [
    { id: 1, sender: "Burger Palace", msg: "Your order is on the way!",    time: "2m ago", unread: true,  img: IMG.burger },
    { id: 2, sender: "Pizza Roma",    msg: "Order delivered successfully",  time: "1h ago", unread: false, img: IMG.pizza  },
    { id: 3, sender: "Promo Alert",   msg: "10% OFF on all burgers today!", time: "3h ago", unread: true,  img: IMG.burger3 },
    
  ];

  return (
    <ScrollView style={s.screen} showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 20 }}>
      <View style={[s.pageHeader, { marginBottom: 8 }]}>
        <View style={{ width: 40 }} />
        <Text style={s.pageTitle}>Inbox</Text>
        <View style={{ width: 40 }} />
      </View>
      <View style={{ paddingHorizontal: 20 }}>
        {msgs.map(m => (
          <TouchableOpacity key={m.id} style={s.msgCard}>
            <Image source={m.img} style={s.msgAvatar} />
            <View style={{ flex: 1 }}>
              <View style={{ flexDirection: "row", justifyContent: "space-between", marginBottom: 4 }}>
                <Text style={[s.msgSender, m.unread && { color: C.purple }]}>{m.sender}</Text>
                <Text style={s.msgTime}>{m.time}</Text>
              </View>
              <Text style={s.msgText} numberOfLines={1}>{m.msg}</Text>
            </View>
            {m.unread && <View style={s.unreadDot} />}
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}

// ── BOTTOM NAV ────────────────────────────────────────────────────────────────
const navTabs = [
  { id: "home",    label: "HOME",    iconUrl: "https://cdn-icons-png.flaticon.com/64/1946/1946488.png" },
  { id: "cart",    label: "ORDER",   iconUrl: "https://cdn-icons-png.flaticon.com/64/3514/3514491.png" },
  { id: "inbox",   label: "INBOX",   iconUrl: "https://cdn-icons-png.flaticon.com/64/134/134914.png"  },
  { id: "profile", label: "PROFILE", iconUrl: "https://cdn-icons-png.flaticon.com/64/1077/1077114.png" },
];

// ── APP ───────────────────────────────────────────────────────────────────────
export default function App() {
  const [tab, setTab] = useState("home");
  const navigate = (screen) => setTab(screen);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: C.white }}>
      <StatusBar barStyle="dark-content" backgroundColor={C.white} />

      {tab === "home"    && <HomeScreen    onNavigate={navigate} />}
      {tab === "cart"    && <CartScreen    onNavigate={navigate} />}
      {tab === "inbox"   && <InboxScreen />}
      {tab === "profile" && <ProfileScreen onNavigate={navigate} />}

      <View style={s.bottomNav}>
        {navTabs.map(({ id, label, iconUrl }) => {
          const active = tab === id;
          return (
            <TouchableOpacity key={id} onPress={() => setTab(id)} style={s.navBtn}>
              <Image source={{ uri: iconUrl }} style={[s.navIcon, { tintColor: active ? C.purple : C.textGray }]} />
              <Text style={[s.navLabel, active && { color: C.purple, fontWeight: "700" }]}>{label}</Text>
              {active && <View style={s.navActiveLine} />}
            </TouchableOpacity>
          );
        })}
      </View>
    </SafeAreaView>
  );
}

// ── STYLES ────────────────────────────────────────────────────────────────────
const s = StyleSheet.create({
  screen: { flex: 1, backgroundColor: C.bg },

  // paddingTop: 10 thay vì 16 vì đã có paddingTop:30 ở contentContainerStyle
  homeHeader:   { flexDirection: "row", alignItems: "center", paddingHorizontal: 20, paddingTop: 10, paddingBottom: 8 },
  avatarImg:    { width: 46, height: 46, borderRadius: 12, borderWidth: 1, borderColor: C.purple },
  notifBox:     { width: 46, height: 46, borderRadius: 12, backgroundColor: C.white, alignItems: "center", justifyContent: "center", borderWidth: 1, borderColor: C.border },
  yourLocation: { fontSize: 11, color: C.textGray },
  locationCity: { fontSize: 15, fontWeight: "700", color: C.text },

  searchContainer: { marginHorizontal: 20, marginBottom: 4, flexDirection: "row", alignItems: "center", backgroundColor: C.purple, borderRadius: 30, paddingHorizontal: 16, paddingVertical: 13 },
  searchInput:     { flex: 1, color: C.white, fontSize: 14 },
  filterBtn:       { backgroundColor: "rgba(255,255,255,0.2)", borderRadius: 20, padding: 7 },

  catItem:       { alignItems: "center", backgroundColor: C.white, borderRadius: 14, paddingHorizontal: 14, paddingVertical: 10, borderWidth: 1, borderColor: C.border, minWidth: 72 },
  catItemActive: { backgroundColor: C.green, borderColor: C.green },
  catImg:        { width: 40, height: 40, borderRadius: 10, marginBottom: 4, resizeMode: "cover" },
  catLabel:      { fontSize: 10, fontWeight: "700", color: C.textGray },

  heroBanner:        { marginHorizontal: 20, borderRadius: 20, overflow: "hidden", height: 155, position: "relative" },
  heroBannerBg:      { position: "absolute", width: "100%", height: "100%", resizeMode: "cover" },
  heroBannerOverlay: { position: "absolute", width: "100%", height: "100%", backgroundColor: "rgba(0,0,0,0.62)" },
  heroBannerContent: { flex: 1, flexDirection: "row", alignItems: "center", padding: 20 },
  heroTitle:         { fontSize: 28, fontWeight: "900", color: C.yellow },
  heroSub:           { fontSize: 13, color: "#DDDDDD", marginTop: 2 },
  heroRating:        { fontSize: 12, color: "#CCCCCC" },
  heroAvatarThumb:   { width: 24, height: 24, borderRadius: 12, borderWidth: 1.5, borderColor: C.white },
  heroBurgerImg:     { width: 100, height: 100, borderRadius: 50, resizeMode: "cover" },
  discountBadge:     { position: "absolute", top: 14, right: 110, backgroundColor: C.purple, borderRadius: 10, paddingHorizontal: 10, paddingVertical: 6, alignItems: "center" },
  discountText:      { fontSize: 11, fontWeight: "800", color: C.white, textAlign: "center" },

  dot:       { width: 6, height: 6, borderRadius: 3, backgroundColor: C.border },
  dotActive: { width: 20, backgroundColor: C.purple },

  sectionHeader:   { flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingHorizontal: 20, marginTop: 20, marginBottom: 14 },
  sectionTitle:    { fontSize: 17, fontWeight: "700", color: C.text },
  viewAll:         { fontSize: 13, color: C.purple, fontWeight: "600" },
  popularGrid:     { flexDirection: "row", flexWrap: "wrap", paddingHorizontal: 20, marginBottom: 10 },
  popularCard:     { width: (W - 52) / 2, backgroundColor: C.white, borderRadius: 16, overflow: "hidden", borderWidth: 1, borderColor: C.border, marginBottom: 12 },
  popularCardImg:  { width: "100%", height: 120, resizeMode: "cover" },
  popularCardName: { fontSize: 14, fontWeight: "700", color: C.text, padding: 10 },

  pageHeader: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingHorizontal: 20, paddingTop: 16, paddingBottom: 12 },
  pageTitle:  { fontSize: 18, fontWeight: "700", color: C.text },
  backCircle: { width: 40, height: 40, borderRadius: 20, backgroundColor: C.white, borderWidth: 1, borderColor: C.border, alignItems: "center", justifyContent: "center" },

  cartFoodCard:      { marginHorizontal: 20, borderRadius: 20, overflow: "hidden", backgroundColor: "#F5F5F5", marginBottom: 16, height: 230, position: "relative" },
  cartMainImg:       { width: "100%", height: "100%", resizeMode: "cover" },
  cartDiscountBadge: { position: "absolute", top: 14, left: 14, backgroundColor: C.purple, borderRadius: 8, paddingHorizontal: 10, paddingVertical: 8, alignItems: "center" },
  cartDiscountText:  { fontSize: 11, fontWeight: "800", color: C.white, textAlign: "center" },
  thumbRow:  { position: "absolute", bottom: 14, left: 14, flexDirection: "row" },
  thumbItem: { width: 56, height: 44, borderRadius: 10, backgroundColor: C.white, marginRight: 8, overflow: "hidden" },
  thumbImg:  { width: "100%", height: "100%", resizeMode: "cover" },

  cartInfoBox:   { paddingHorizontal: 20, marginBottom: 16 },
  cartFoodName:  { fontSize: 26, fontWeight: "900", color: C.text },
  cartFoodPrice: { fontSize: 24, fontWeight: "800", color: C.purple },
  cartRating:    { fontSize: 13, color: C.textGray },

  qtyRow:      { flexDirection: "row", alignItems: "center" },
  qtyAddBtn:   { backgroundColor: C.purple, borderRadius: 8, width: 32, height: 32, alignItems: "center", justifyContent: "center", marginRight: 10 },
  qtyMinusBtn: { backgroundColor: C.white, borderRadius: 20, width: 32, height: 32, alignItems: "center", justifyContent: "center", borderWidth: 1, borderColor: C.border, marginLeft: 10 },
  qtyNum:      { fontSize: 16, fontWeight: "700", color: C.text, minWidth: 24, textAlign: "center" },

  deliveryBox:   { flex: 1, flexDirection: "row", alignItems: "center", backgroundColor: C.greenLight, borderRadius: 14, padding: 14, marginRight: 12 },
  deliveryLabel: { fontSize: 12, color: C.textGray },
  deliveryValue: { fontSize: 13, fontWeight: "600", color: C.text },
  editBtn:       { width: 50, height: 50, backgroundColor: C.purpleLight, borderRadius: 14, alignItems: "center", justifyContent: "center" },

  paymentRow:    { flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingHorizontal: 20, marginBottom: 16 },
  paymentLabel:  { fontSize: 15, fontWeight: "600", color: C.text },
  cardImg:       { width: 38, height: 26, borderRadius: 4, marginRight: 10, resizeMode: "cover" },
  changeBtn:     { borderWidth: 1.5, borderColor: C.purple, borderRadius: 20, paddingHorizontal: 16, paddingVertical: 6 },
  changeBtnText: { color: C.purple, fontWeight: "600", fontSize: 13 },

  summaryBox:   { marginHorizontal: 20, marginBottom: 20 },
  summaryTitle: { fontSize: 15, fontWeight: "700", color: C.text, marginBottom: 12 },
  summaryRow:   { flexDirection: "row", justifyContent: "space-between", marginBottom: 8 },
  summaryLabel: { fontSize: 13, color: C.textGray },
  summaryValue: { fontSize: 13, fontWeight: "600", color: C.text },

  confirmBtn:     { marginHorizontal: 20, backgroundColor: C.purple, borderRadius: 30, padding: 16, alignItems: "center" },
  confirmBtnText: { color: C.white, fontSize: 16, fontWeight: "700" },

  profileHero:         { alignItems: "center", paddingVertical: 24, backgroundColor: C.bgYellow, marginHorizontal: 20, borderRadius: 20, marginBottom: 20 },
  profileAvatarWrap:   { position: "relative", marginBottom: 12 },
  profileAvatarBorder: { width: 100, height: 100, borderRadius: 50, borderWidth: 3, borderColor: C.yellow, padding: 3 },
  profileAvatarImg:    { width: "100%", height: "100%", borderRadius: 47, resizeMode: "cover" },
  editAvatarBtn:       { position: "absolute", bottom: 2, right: -2, backgroundColor: C.purple, borderRadius: 14, width: 28, height: 28, alignItems: "center", justifyContent: "center" },
  profileName:  { fontSize: 20, fontWeight: "800", color: C.text },
  profileEmail: { fontSize: 13, color: C.textGray, marginTop: 4 },

  menuItem:    { flexDirection: "row", alignItems: "center", paddingVertical: 15, borderBottomWidth: 1, borderBottomColor: C.border },
  menuIconImg: { width: 22, height: 22, resizeMode: "contain", marginRight: 14 },
  menuLabel:   { flex: 1, fontSize: 15, fontWeight: "500", color: C.text },

  logoutBtn:  { marginHorizontal: 20, marginTop: 20, backgroundColor: C.purple, borderRadius: 14, padding: 16, flexDirection: "row", alignItems: "center", justifyContent: "center" },
  logoutText: { color: C.white, fontWeight: "700", fontSize: 15 },

  msgCard:   { flexDirection: "row", alignItems: "center", backgroundColor: C.white, borderRadius: 14, padding: 14, marginBottom: 10, borderWidth: 1, borderColor: C.border },
  msgAvatar: { width: 52, height: 52, borderRadius: 14, marginRight: 12, resizeMode: "cover" },
  msgSender: { fontSize: 14, fontWeight: "700", color: C.text },
  msgTime:   { fontSize: 11, color: C.textGray },
  msgText:   { fontSize: 12, color: C.textGray },
  unreadDot: { width: 10, height: 10, borderRadius: 5, backgroundColor: C.purple, marginLeft: 8 },

  bottomNav:     { flexDirection: "row", backgroundColor: C.white, borderTopWidth: 1, borderTopColor: C.border, paddingBottom: 6, paddingTop: 8 },
  navBtn:        { flex: 1, alignItems: "center", paddingVertical: 4 },
  navIcon:       { width: 24, height: 24, resizeMode: "contain" },
  navLabel:      { fontSize: 9, fontWeight: "600", color: C.textGray, marginTop: 3, letterSpacing: 0.5 },
  navActiveLine: { width: 20, height: 2, backgroundColor: C.purple, borderRadius: 1, marginTop: 3 },
});