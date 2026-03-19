import React, { useState } from "react";
import {
  View, Text, ScrollView, TouchableOpacity, TextInput,
  StyleSheet, StatusBar, SafeAreaView, Image, Switch,
  Dimensions, Alert,
} from "react-native";
import { AuthProvider, useAuth } from "./context/AuthContext";
import { CartProvider, useCart } from "./context/CartContext";
import { PRODUCTS, CATEGORIES, BANNERS } from "./data";

const W = Dimensions.get("window").width;

const C = {
  bg: "#FFFFFF",
  purple: "#4F46E5",
  purpleLight: "#EEF2FF",
  yellow: "#F59E0B",
  green: "#22C55E",
  greenLight: "#DCFCE7",
  red: "#EF4444",
  text: "#111827",
  textGray: "#6B7280",
  border: "#F3F4F6",
  white: "#FFFFFF",
  cardBg: "#F9FAFB",
};

const IMG = {
  avatar:  require("./assets/avatar.png"),
  avatar1: require("./assets/ava.png"),
  burger:  require("./assets/burger.png"),
  b1:      require("./assets/b1.png"),
  b2:      require("./assets/b2.png"),
  b3:      require("./assets/b3.png"),
  b4:      require("./assets/b4.png"),
  pizza:   require("./assets/pizza.png"),
  p1:      require("./assets/p1.png"),
  drink:   require("./assets/drink.png"),
  rice:    require("./assets/rice.png"),
  card:    require("./assets/card.png"),
};

// Nav icon URLs - giống y design
const NAV_ICONS = {
  home:    "https://cdn-icons-png.flaticon.com/64/25/25694.png",
  cart:    "https://cdn-icons-png.flaticon.com/64/3514/3514491.png",
  inbox:   "https://cdn-icons-png.flaticon.com/64/134/134914.png",
  profile: "https://cdn-icons-png.flaticon.com/64/1077/1077114.png",
};

const NAV_TABS = [
  { id: "home",    label: "HOME" },
  { id: "cart",    label: "ORDER" },
  { id: "inbox",   label: "INBOX" },
  { id: "profile", label: "PROFILE" },
];

// ════════════════════════════════════════════════════════════
// LOGIN
// ════════════════════════════════════════════════════════════
function LoginScreen({ onGoRegister }) {
  const { login, error, clearError } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPw, setShowPw] = useState(false);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: C.bg }}>
      <StatusBar barStyle="dark-content" />
      <ScrollView contentContainerStyle={ls.wrap} keyboardShouldPersistTaps="handled">
        <View style={ls.logoBox}>
          <View style={ls.logoCircle}><Text style={{ fontSize: 38 }}>🍔</Text></View>
          <Text style={ls.appName}>FoodieGo</Text>
          <Text style={ls.appSub}>Order your favourite food!</Text>
        </View>
        <Text style={ls.title}>Welcome Back 👋</Text>
        <Text style={ls.subtitle}>Sign in to continue</Text>
        {!!error && <View style={ls.errBox}><Text style={ls.errText}>⚠️  {error}</Text></View>}
        <View style={ls.inputBox}>
          <Text style={ls.inputIcon}>📧</Text>
          <TextInput value={email} onChangeText={setEmail} placeholder="Email address"
            placeholderTextColor={C.textGray} keyboardType="email-address"
            autoCapitalize="none" style={ls.input} />
        </View>
        <View style={ls.inputBox}>
          <Text style={ls.inputIcon}>🔒</Text>
          <TextInput value={password} onChangeText={setPassword} placeholder="Password"
            placeholderTextColor={C.textGray} secureTextEntry={!showPw} style={ls.input} />
          <TouchableOpacity onPress={() => setShowPw(v => !v)}>
            <Text style={{ color: C.purple, fontSize: 12, fontWeight: "600" }}>{showPw ? "Hide" : "Show"}</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={ls.loginBtn} onPress={() => { clearError(); login(email.trim(), password); }}>
          <Text style={ls.loginBtnText}>Sign In</Text>
        </TouchableOpacity>
        <View style={ls.demoBox}><Text style={ls.demoText}>Demo: a@gmail.com / 123456</Text></View>
        <View style={ls.divider}>
          <View style={ls.divLine} /><Text style={ls.divText}>or</Text><View style={ls.divLine} />
        </View>
        <TouchableOpacity onPress={onGoRegister} style={{ alignItems: "center" }}>
          <Text style={{ fontSize: 14, color: C.textGray }}>
            Don't have an account? <Text style={{ color: C.purple, fontWeight: "700" }}>Sign Up</Text>
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const ls = StyleSheet.create({
  wrap:       { flexGrow: 1, padding: 24, paddingTop: 40 },
  logoBox:    { alignItems: "center", marginBottom: 28 },
  logoCircle: { width: 80, height: 80, borderRadius: 40, backgroundColor: C.purple, alignItems: "center", justifyContent: "center", marginBottom: 10 },
  appName:    { fontSize: 26, fontWeight: "900", color: C.text },
  appSub:     { fontSize: 13, color: C.textGray, marginTop: 2 },
  title:      { fontSize: 24, fontWeight: "800", color: C.text, marginBottom: 4 },
  subtitle:   { fontSize: 14, color: C.textGray, marginBottom: 20 },
  errBox:     { backgroundColor: "#FEE2E2", borderRadius: 12, padding: 12, marginBottom: 14 },
  errText:    { color: C.red, fontSize: 13, fontWeight: "600" },
  inputBox:   { flexDirection: "row", alignItems: "center", backgroundColor: "#F8F8F8", borderRadius: 14, paddingHorizontal: 14, paddingVertical: 13, marginBottom: 14, borderWidth: 1, borderColor: C.border },
  inputIcon:  { fontSize: 16, marginRight: 10 },
  input:      { flex: 1, fontSize: 14, color: C.text },
  loginBtn:   { backgroundColor: C.purple, borderRadius: 16, padding: 16, alignItems: "center", marginBottom: 14 },
  loginBtnText: { color: "#FFF", fontWeight: "800", fontSize: 16 },
  demoBox:    { backgroundColor: C.purpleLight, borderRadius: 10, padding: 10, alignItems: "center", marginBottom: 14 },
  demoText:   { color: C.purple, fontSize: 12, fontWeight: "600" },
  divider:    { flexDirection: "row", alignItems: "center", marginVertical: 14 },
  divLine:    { flex: 1, height: 1, backgroundColor: C.border },
  divText:    { color: C.textGray, marginHorizontal: 12, fontSize: 13 },
});

// ════════════════════════════════════════════════════════════
// REGISTER
// ════════════════════════════════════════════════════════════
function RegisterScreen({ onGoLogin }) {
  const { register, error, clearError } = useAuth();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [showPw, setShowPw] = useState(false);

  const handleRegister = () => {
    clearError();
    if (password !== confirm) { Alert.alert("Lỗi", "Mật khẩu không khớp!"); return; }
    register(name.trim(), email.trim(), password);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: C.bg }}>
      <StatusBar barStyle="dark-content" />
      <ScrollView contentContainerStyle={ls.wrap} keyboardShouldPersistTaps="handled">
        <TouchableOpacity style={{ marginBottom: 20 }} onPress={onGoLogin}>
          <Text style={{ fontSize: 22, color: C.text }}>←</Text>
        </TouchableOpacity>
        <Text style={[ls.title, { fontSize: 26 }]}>Create Account 🎉</Text>
        <Text style={ls.subtitle}>Join us and start ordering!</Text>
        {!!error && <View style={ls.errBox}><Text style={ls.errText}>⚠️  {error}</Text></View>}
        {[
          { label: "Full Name", val: name, set: setName, icon: "👤", type: "default" },
          { label: "Email address", val: email, set: setEmail, icon: "📧", type: "email-address" },
        ].map(f => (
          <View key={f.label} style={ls.inputBox}>
            <Text style={ls.inputIcon}>{f.icon}</Text>
            <TextInput value={f.val} onChangeText={f.set} placeholder={f.label}
              placeholderTextColor={C.textGray} keyboardType={f.type}
              autoCapitalize="none" style={ls.input} />
          </View>
        ))}
        <View style={ls.inputBox}>
          <Text style={ls.inputIcon}>🔒</Text>
          <TextInput value={password} onChangeText={setPassword} placeholder="Password (min 6)"
            placeholderTextColor={C.textGray} secureTextEntry={!showPw} style={ls.input} />
          <TouchableOpacity onPress={() => setShowPw(v => !v)}>
            <Text style={{ color: C.purple, fontSize: 12, fontWeight: "600" }}>{showPw ? "Hide" : "Show"}</Text>
          </TouchableOpacity>
        </View>
        <View style={ls.inputBox}>
          <Text style={ls.inputIcon}>🔒</Text>
          <TextInput value={confirm} onChangeText={setConfirm} placeholder="Confirm password"
            placeholderTextColor={C.textGray} secureTextEntry={!showPw} style={ls.input} />
        </View>
        <TouchableOpacity style={[ls.loginBtn, { marginTop: 8 }]} onPress={handleRegister}>
          <Text style={ls.loginBtnText}>Create Account</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ alignItems: "center", marginTop: 16 }} onPress={onGoLogin}>
          <Text style={{ fontSize: 14, color: C.textGray }}>
            Already have an account? <Text style={{ color: C.purple, fontWeight: "700" }}>Sign In</Text>
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

// ════════════════════════════════════════════════════════════
// HOME
// ════════════════════════════════════════════════════════════
function HomeScreen({ onItemPress }) {
  const { user } = useAuth();
  const { addToCart, toggleFav, isFav, cartCount } = useCart();
  const [activeCat, setActiveCat] = useState(1);
  const [bannerIdx, setBannerIdx] = useState(0);

  const filtered = activeCat === 1
    ? PRODUCTS
    : PRODUCTS.filter(p => p.category === CATEGORIES.find(c => c.id === activeCat)?.name);

  return (
    <ScrollView style={s.screen} showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingBottom: 20, paddingTop: 30 }}>
      {/* Header */}
      <View style={s.homeHeader}>
        <Image source={user?.avatar || IMG.avatar} style={s.avatarImg} />
        <View style={{ alignItems: "center", flex: 1 }}>
          <Text style={{ fontSize: 11, color: C.textGray }}>Your Location</Text>
          <Text style={{ fontSize: 15, fontWeight: "700", color: C.text }}>📍 Savar, Dhaka</Text>
        </View>
        <View style={{ position: "relative" }}>
          <TouchableOpacity style={s.notifBox}>
            <Image source={{ uri: "https://cdn-icons-png.flaticon.com/64/3239/3239952.png" }}
              style={{ width: 22, height: 22, tintColor: C.purple }} />
          </TouchableOpacity>
          {cartCount > 0 && <View style={s.badge}><Text style={s.badgeText}>{cartCount}</Text></View>}
        </View>
      </View>
      <Text style={s.greeting}>Hello, {user?.name?.split(" ")[0] || "Guest"} 👋</Text>
      <Text style={s.greetingSub}>What are you craving today?</Text>

      {/* Search */}
      <View style={s.searchBar}>
        <Image source={{ uri: "https://cdn-icons-png.flaticon.com/64/149/149852.png" }}
          style={{ width: 18, height: 18, tintColor: "#FFF", marginRight: 8 }} />
        <Text style={{ color: "rgba(255,255,255,0.7)", fontSize: 14, flex: 1 }}>Search your food...</Text>
        <TouchableOpacity style={s.filterBtn}>
          <Image source={{ uri: "https://cdn-icons-png.flaticon.com/64/1163/1163497.png" }}
            style={{ width: 18, height: 18, tintColor: "#FFF" }} />
        </TouchableOpacity>
      </View>

      {/* Categories */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 20, paddingVertical: 14 }}>
        {CATEGORIES.map((c, i) => (
          <TouchableOpacity key={c.id} onPress={() => setActiveCat(c.id)}
            style={[s.catItem, activeCat === c.id && s.catItemActive, i < CATEGORIES.length - 1 && { marginRight: 10 }]}>
            <Image source={c.icon} style={{ width: 36, height: 36, borderRadius: 8, resizeMode: "cover" }} />
            <Text style={[s.catLabel, activeCat === c.id && { color: "#FFF" }]}>{c.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Hero Banner */}
      <View style={s.heroBanner}>
        <Image source={BANNERS[bannerIdx].img} style={s.heroBg} blurRadius={2} />
        <View style={s.heroOverlay} />
        <View style={s.heroContent}>
          <View style={{ flex: 1 }}>
            <Text style={s.heroTitle}>{BANNERS[bannerIdx].title}</Text>
            <Text style={s.heroSub}>{BANNERS[bannerIdx].subtitle}</Text>
            <View style={{ flexDirection: "row", alignItems: "center", marginTop: 8 }}>
              <Image source={user?.avatar || IMG.avatar} style={s.heroAvatar} />
              <Image source={IMG.avatar1} style={[s.heroAvatar, { marginLeft: -8 }]} />
              <Text style={s.heroRating}>  ⭐ 4.9 (3k+ Rating)</Text>
            </View>
          </View>
          <Image source={BANNERS[bannerIdx].img} style={s.heroFoodImg} />
        </View>
        <View style={s.heroBadge}>
          <Text style={{ color: "#FFF", fontSize: 11, fontWeight: "800", textAlign: "center" }}>
            {BANNERS[bannerIdx].discount}
          </Text>
        </View>
      </View>

      {/* Dots */}
      <View style={{ flexDirection: "row", justifyContent: "center", marginTop: 10 }}>
        {BANNERS.map((_, i) => (
          <TouchableOpacity key={i} onPress={() => setBannerIdx(i)}>
            <View style={[s.dot, i === bannerIdx && s.dotActive, i < BANNERS.length - 1 && { marginRight: 6 }]} />
          </TouchableOpacity>
        ))}
      </View>

      {/* Popular */}
      <View style={s.secHeader}>
        <Text style={s.secTitle}>Popular Items</Text>
        <TouchableOpacity><Text style={s.seeAll}>View All</Text></TouchableOpacity>
      </View>
      <View style={s.grid}>
        {filtered.slice(0, 6).map((item, i) => (
          <TouchableOpacity key={item.id} onPress={() => onItemPress(item)}
            style={[s.foodCard, i % 2 === 0 && { marginRight: 12 }]}>
            <View style={{ position: "relative" }}>
              <Image source={item.img} style={s.foodCardImg} />
              <TouchableOpacity onPress={() => toggleFav(item)} style={s.favBtn}>
                <Text style={{ fontSize: 15 }}>{isFav(item.id) ? "❤️" : "🤍"}</Text>
              </TouchableOpacity>
              <View style={s.tagBadge}><Text style={s.tagBadgeText}>{item.tag}</Text></View>
            </View>
            <View style={{ padding: 10 }}>
              <Text style={s.foodCardName} numberOfLines={1}>{item.name}</Text>
              <Text style={{ fontSize: 11, color: C.textGray, marginBottom: 6 }}>⭐ {item.rating} · {item.time} min</Text>
              <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                <Text style={{ fontWeight: "800", color: C.purple, fontSize: 15 }}>${item.price}</Text>
                <TouchableOpacity onPress={() => addToCart(item)} style={s.addBtn}>
                  <Text style={s.addBtnText}>+</Text>
                </TouchableOpacity>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}

// ════════════════════════════════════════════════════════════
// ORDER (CART) SCREEN - y chang design
// ════════════════════════════════════════════════════════════
function CartScreen() {
  const { cartItems, updateQty, clearCart, cartTotal } = useCart();
  const delivery = cartItems.length > 0 ? 6.20 : 0;
  const total = cartTotal + delivery;
  const first = cartItems[0];
  const totalQty = cartItems.reduce((t, i) => t + i.qty, 0);

  return (
    <View style={{ flex: 1, backgroundColor: C.bg }}>

      {/* ── Header ── */}
      <View style={os.header}>
        <TouchableOpacity style={os.circleBtn}>
          <Text style={{ fontSize: 22, color: C.text, lineHeight: 26 }}>‹</Text>
        </TouchableOpacity>
        <Text style={os.headerTitle}>Shopping Cart</Text>
        <TouchableOpacity onPress={clearCart} style={os.circleBtn}>
          <Image source={{ uri: "https://cdn-icons-png.flaticon.com/64/3096/3096673.png" }}
            style={{ width: 20, height: 20, tintColor: C.text }} />
        </TouchableOpacity>
      </View>

      {cartItems.length === 0 ? (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
          <Text style={{ fontSize: 64, marginBottom: 16 }}>🛒</Text>
          <Text style={{ fontSize: 17, fontWeight: "700", color: C.text }}>Your cart is empty</Text>
          <Text style={{ fontSize: 13, color: C.textGray, marginTop: 6 }}>Add items to start your order</Text>
        </View>
      ) : (
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 36 }}>

          {/* ── Big food image full width ── */}
          <View style={os.bigImgWrap}>
            <Image source={first?.img} style={os.bigImg} />
            {/* 10% OFF badge */}
            <View style={os.offBadge}>
              <Text style={os.offText}>10%</Text>
              <Text style={os.offText}>OFF</Text>
            </View>
            {/* Thumbnails bottom-left */}
            <View style={os.thumbRow}>
              {cartItems.slice(0, 3).map((item, i) => (
                <View key={item.id}
                  style={[os.thumb, i === 0 && { borderWidth: 2.5, borderColor: C.purple }]}>
                  <Image source={item.img}
                    style={{ width: "100%", height: "100%", resizeMode: "cover" }} />
                </View>
              ))}
            </View>
          </View>

          <View style={{ paddingHorizontal: 20 }}>

            {/* ── Name + Price ── */}
            <View style={os.nameRow}>
              <Text style={os.foodName}>{first?.name?.split(" ")[0]?.toUpperCase()}</Text>
              <Text style={os.foodPrice}>${first?.price}</Text>
            </View>

            {/* ── Rating + Qty ── */}
            <View style={os.ratingRow}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Text style={{ color: "#F59E0B", fontSize: 18, marginRight: 5 }}>★</Text>
                <Text style={{ fontSize: 14, color: C.textGray }}>4.9 (3k+ Rating)</Text>
              </View>
              {/* Qty: [checkbox-btn] [02] [minus-btn] */}
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <TouchableOpacity onPress={() => updateQty(first.id, 1)} style={os.qtyAdd}>
                  <View style={os.checkIcon}>
                    <Text style={{ color: "#FFF", fontSize: 14, fontWeight: "900" }}>✓</Text>
                    <Text style={{ color: "#FFF", fontSize: 11, fontWeight: "900", marginLeft: 1 }}>+</Text>
                  </View>
                </TouchableOpacity>
                <Text style={os.qtyNum}>{String(first?.qty || 0).padStart(2, "0")}</Text>
                <TouchableOpacity onPress={() => updateQty(first.id, -1)} style={os.qtyMinus}>
                  <Text style={{ color: C.text, fontSize: 24, fontWeight: "300", lineHeight: 28 }}>−</Text>
                </TouchableOpacity>
              </View>
            </View>

            {/* ── Delivery Address ── */}
            <View style={os.deliveryWrap}>
              <View style={os.deliveryBox}>
                <View style={os.pinWrap}>
                  <Image source={{ uri: "https://cdn-icons-png.flaticon.com/64/684/684908.png" }}
                    style={{ width: 22, height: 22, tintColor: C.green }} />
                </View>
                <View>
                  <Text style={os.deliveryLabel}>Delivery Address</Text>
                  <Text style={os.deliveryValue}>Dhaka, Bangladesh</Text>
                </View>
              </View>
              <TouchableOpacity style={os.editBtn}>
                <Image source={{ uri: "https://cdn-icons-png.flaticon.com/64/1250/1250615.png" }}
                  style={{ width: 20, height: 20, tintColor: C.purple }} />
              </TouchableOpacity>
            </View>

            {/* ── Payment Method ── */}
            <View style={os.payRow}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Image source={IMG.card} style={os.cardImg} />
                <Text style={os.payLabel}>Payment Method</Text>
              </View>
              <TouchableOpacity style={os.changeBtn}>
                <Text style={os.changeBtnText}>Change</Text>
              </TouchableOpacity>
            </View>

            {/* ── Checkout Summary ── */}
            <Text style={os.summaryTitle}>Checkout Summary</Text>

            <View style={os.summaryRow}>
              <Text style={os.summaryLabel}>Subtotal ({totalQty})</Text>
              <Text style={os.summaryValue}>${cartTotal.toFixed(0)}</Text>
            </View>
            <View style={os.summaryRow}>
              <Text style={os.summaryLabel}>Delivery Fee</Text>
              <Text style={os.summaryValue}>${delivery.toFixed(2)}</Text>
            </View>

            {/* divider */}
            <View style={{ height: 1, backgroundColor: "#E5E7EB", marginVertical: 14 }} />

            {/* ── Payable Total ── */}
            <View style={os.totalRow}>
              <Text style={os.totalLabel}>Payable Total</Text>
              <Text style={os.totalValue}>${total.toFixed(1)}</Text>
            </View>

            {/* ── Confirm Order Button ── */}
            <TouchableOpacity style={os.confirmBtn}>
              <Text style={os.confirmText}>Confirm Order</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      )}
    </View>
  );
}

// ════════════════════════════════════════════════════════════
// INBOX
// ════════════════════════════════════════════════════════════
function InboxScreen() {
  const msgs = [
    { id: 1, sender: "Burger Palace", msg: "Your order is on the way!", time: "2m ago", unread: true,  img: IMG.burger },
    { id: 2, sender: "Pizza Roma",    msg: "Order delivered successfully",  time: "1h ago", unread: false, img: IMG.pizza  },
    { id: 3, sender: "Promo Alert",   msg: "10% OFF on all burgers today!", time: "3h ago", unread: true,  img: IMG.b1     },
    { id: 4, sender: "FoodieGo",      msg: "Your order has been confirmed", time: "1d ago", unread: false, img: IMG.drink  },
  ];

  return (
    <ScrollView style={s.screen} showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingBottom: 20, paddingTop: 30 }}>
      <View style={{ alignItems: "center", paddingBottom: 16 }}>
        <Text style={{ fontSize: 20, fontWeight: "700", color: C.text }}>Inbox</Text>
      </View>
      <View style={{ paddingHorizontal: 20 }}>
        {msgs.map(m => (
          <TouchableOpacity key={m.id} style={ib.card}>
            <View style={{ position: "relative" }}>
              <Image source={m.img} style={ib.avatar} />
              {m.unread && <View style={ib.dot} />}
            </View>
            <View style={{ flex: 1 }}>
              <View style={{ flexDirection: "row", justifyContent: "space-between", marginBottom: 4 }}>
                <Text style={[ib.sender, m.unread && { color: C.purple }]}>{m.sender}</Text>
                <Text style={ib.time}>{m.time}</Text>
              </View>
              <Text style={ib.msg} numberOfLines={1}>{m.msg}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}
const ib = StyleSheet.create({
  card:   { flexDirection: "row", alignItems: "center", backgroundColor: C.white, borderRadius: 14, padding: 14, marginBottom: 10, borderWidth: 1, borderColor: C.border, gap: 12 },
  avatar: { width: 52, height: 52, borderRadius: 14, resizeMode: "cover" },
  dot:    { position: "absolute", top: 0, right: 0, width: 10, height: 10, borderRadius: 5, backgroundColor: C.purple, borderWidth: 2, borderColor: C.white },
  sender: { fontSize: 14, fontWeight: "700", color: C.text },
  time:   { fontSize: 11, color: C.textGray },
  msg:    { fontSize: 12, color: C.textGray },
});

// ════════════════════════════════════════════════════════════
// PROFILE
// ════════════════════════════════════════════════════════════
function ProfileScreen() {
  const { user, logout } = useAuth();
  const { cartItems, favorites } = useCart();
  const [darkMode, setDarkMode] = useState(false);
  const menuItems = [
    { icon: "https://cdn-icons-png.flaticon.com/64/1946/1946488.png", label: "Home" },
    { icon: "https://cdn-icons-png.flaticon.com/64/633/633611.png",   label: "My Card" },
    { icon: "https://cdn-icons-png.flaticon.com/64/2593/2593549.png", label: "Dark Mode", toggle: true },
    { icon: "https://cdn-icons-png.flaticon.com/64/684/684908.png",   label: "Track Your Order" },
    { icon: "https://cdn-icons-png.flaticon.com/64/2040/2040504.png", label: "Settings" },
    { icon: "https://cdn-icons-png.flaticon.com/64/1828/1828940.png", label: "Help Center" },
  ];

  return (
    <ScrollView style={s.screen} showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingBottom: 30, paddingTop: 30 }}>
      <View style={{ paddingHorizontal: 20, paddingBottom: 12 }}>
        <Text style={{ fontSize: 20, fontWeight: "700", color: C.text }}>
          My <Text style={{ color: C.purple }}>Profile</Text>
        </Text>
      </View>
      <View style={ps.heroCard}>
        <View style={ps.avatarWrap}>
          <View style={ps.avatarRing}>
            <Image source={user?.avatar || IMG.avatar} style={ps.avatarImg} />
          </View>
          <TouchableOpacity style={ps.editBtn}><Text style={{ fontSize: 12 }}>✏️</Text></TouchableOpacity>
        </View>
        <Text style={ps.name}>{user?.name || "Guest"}</Text>
        <Text style={ps.email}>{user?.email || ""}</Text>
      </View>
      <View style={{ flexDirection: "row", paddingHorizontal: 20, marginBottom: 20 }}>
        {[["🛒", cartItems.length, "Orders"], ["❤️", favorites.length, "Saved"], ["⭐", "4.9", "Rating"]].map(([icon, val, lbl], i) => (
          <View key={lbl} style={[s.statBox, i < 2 && { marginRight: 12 }]}>
            <Text style={{ fontSize: 22, marginBottom: 4 }}>{icon}</Text>
            <Text style={{ fontWeight: "800", fontSize: 18, color: C.purple }}>{val}</Text>
            <Text style={{ fontSize: 11, color: C.textGray }}>{lbl}</Text>
          </View>
        ))}
      </View>
      <View style={{ paddingHorizontal: 20 }}>
        {menuItems.map((item, i) => (
          <TouchableOpacity key={i} style={ps.menuRow}>
            <Image source={{ uri: item.icon }} style={{ width: 22, height: 22, resizeMode: "contain", marginRight: 14, tintColor: C.textGray }} />
            <Text style={ps.menuLabel}>{item.label}</Text>
            {item.toggle
              ? <Switch value={darkMode} onValueChange={setDarkMode} trackColor={{ false: "#DDD", true: C.purple }} thumbColor="#FFF" />
              : <Text style={{ color: C.textGray, fontSize: 18 }}>›</Text>}
          </TouchableOpacity>
        ))}
      </View>
      <TouchableOpacity style={ps.logoutBtn} onPress={logout}>
        <Text style={ps.logoutText}>Log Out  →</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

// ════════════════════════════════════════════════════════════
// DETAIL
// ════════════════════════════════════════════════════════════
function DetailScreen({ item, onBack }) {
  const { addToCart, toggleFav, isFav } = useCart();
  const [qty, setQty] = useState(1);

  return (
    <ScrollView style={s.screen} showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 40 }}>
      <View style={{ height: 280, position: "relative" }}>
        <Image source={item.img} style={{ width: "100%", height: "100%", resizeMode: "cover" }} />
        <View style={{ position: "absolute", inset: 0, backgroundColor: "rgba(0,0,0,0.2)" }} />
        <TouchableOpacity onPress={onBack} style={ds.backBtn}><Text style={{ color: "#FFF", fontSize: 20 }}>←</Text></TouchableOpacity>
        <TouchableOpacity onPress={() => toggleFav(item)} style={ds.heartBtn}><Text style={{ fontSize: 20 }}>{isFav(item.id) ? "❤️" : "🤍"}</Text></TouchableOpacity>
        <View style={ds.tagOnImg}><Text style={{ color: "#FFF", fontWeight: "800", fontSize: 11 }}>{item.tag}</Text></View>
      </View>
      <View style={{ padding: 24 }}>
        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 6 }}>
          <Text style={{ fontSize: 24, fontWeight: "900", color: C.text, flex: 1 }}>{item.name}</Text>
          <View style={{ alignItems: "flex-end" }}>
            <Text style={{ fontSize: 24, fontWeight: "900", color: C.purple }}>${item.price}</Text>
            <Text style={{ fontSize: 13, color: C.textGray, textDecorationLine: "line-through" }}>${item.oldPrice}</Text>
          </View>
        </View>
        <Text style={{ fontSize: 12, color: C.textGray, marginBottom: 16 }}>{item.category}</Text>
        <View style={{ flexDirection: "row", marginBottom: 24 }}>
          {[["⭐", item.rating, "Rating"], ["🕐", item.time + "m", "Delivery"], ["💬", item.reviews, "Reviews"]].map((st, i) => (
            <View key={st[2]} style={[s.statBox, i < 2 && { marginRight: 12 }]}>
              <Text style={{ fontSize: 20, marginBottom: 4 }}>{st[0]}</Text>
              <Text style={{ fontWeight: "700", color: C.purple, fontSize: 14 }}>{st[1]}</Text>
              <Text style={{ fontSize: 10, color: C.textGray }}>{st[2]}</Text>
            </View>
          ))}
        </View>
        <Text style={{ fontWeight: "700", fontSize: 16, color: C.text, marginBottom: 8 }}>Description</Text>
        <Text style={{ fontSize: 14, color: C.textGray, lineHeight: 22, marginBottom: 28 }}>{item.description}</Text>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View style={ds.qtyBox}>
            <TouchableOpacity onPress={() => setQty(q => Math.max(1, q - 1))}>
              <Text style={{ color: C.purple, fontSize: 22, fontWeight: "700", paddingHorizontal: 4 }}>−</Text>
            </TouchableOpacity>
            <Text style={{ fontWeight: "800", fontSize: 18, minWidth: 28, textAlign: "center", color: C.text }}>{qty}</Text>
            <TouchableOpacity onPress={() => setQty(q => q + 1)}>
              <Text style={{ color: C.purple, fontSize: 22, fontWeight: "700", paddingHorizontal: 4 }}>+</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={() => { addToCart({ ...item, qty }); onBack(); }}
            style={{ flex: 1, backgroundColor: C.purple, borderRadius: 30, padding: 16, alignItems: "center" }}>
            <Text style={{ color: "#FFF", fontWeight: "800", fontSize: 15 }}>Add to Cart · ${(item.price * qty).toFixed(2)}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

// ════════════════════════════════════════════════════════════
// MAIN APP
// ════════════════════════════════════════════════════════════
function MainApp() {
  const { user } = useAuth();
  const { cartCount } = useCart();
  const [tab, setTab] = useState("home");
  const [detail, setDetail] = useState(null);
  const [authScreen, setAuthScreen] = useState("login");

  if (!user) {
    return authScreen === "register"
      ? <RegisterScreen onGoLogin={() => setAuthScreen("login")} />
      : <LoginScreen onGoRegister={() => setAuthScreen("register")} />;
  }

  if (detail) {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: C.white }}>
        <StatusBar barStyle="dark-content" />
        <DetailScreen item={detail} onBack={() => setDetail(null)} />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: C.white }}>
      <StatusBar barStyle="dark-content" backgroundColor={C.white} />

      {tab === "home"    && <HomeScreen onItemPress={setDetail} />}
      {tab === "cart"    && <CartScreen />}
      {tab === "inbox"   && <InboxScreen />}
      {tab === "profile" && <ProfileScreen />}

      {/* ── Bottom Navigation ── */}
      <View style={nav.bar}>
        {NAV_TABS.map(({ id, label }) => {
          const active = tab === id;
          const showBadge = id === "cart" && cartCount > 0;
          return (
            <TouchableOpacity key={id} onPress={() => setTab(id)} style={nav.btn}>
              <View style={{ position: "relative", alignItems: "center" }}>
                <Image
                  source={{ uri: NAV_ICONS[id] }}
                  style={[nav.icon, { tintColor: active ? C.purple : "#9CA3AF" }]}
                />
                {showBadge && (
                  <View style={nav.badge}>
                    <Text style={nav.badgeText}>{cartCount}</Text>
                  </View>
                )}
              </View>
              <Text style={[nav.label, active && nav.labelActive]}>{label}</Text>
              {active && <View style={nav.underline} />}
            </TouchableOpacity>
          );
        })}
      </View>
    </SafeAreaView>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <MainApp />
      </CartProvider>
    </AuthProvider>
  );
}

// ════════════════════════════════════════════════════════════
// GLOBAL STYLES
// ════════════════════════════════════════════════════════════
const s = StyleSheet.create({
  screen:       { flex: 1, backgroundColor: C.bg },
  homeHeader:   { flexDirection: "row", alignItems: "center", paddingHorizontal: 20, paddingBottom: 4 },
  avatarImg:    { width: 46, height: 46, borderRadius: 12, borderWidth: 1.5, borderColor: C.purple },
  notifBox:     { width: 46, height: 46, borderRadius: 12, backgroundColor: C.white, alignItems: "center", justifyContent: "center", borderWidth: 1, borderColor: C.border },
  badge:        { position: "absolute", top: -4, right: -4, backgroundColor: C.red, borderRadius: 8, width: 16, height: 16, alignItems: "center", justifyContent: "center" },
  badgeText:    { color: "#FFF", fontSize: 9, fontWeight: "800" },
  greeting:     { fontSize: 20, fontWeight: "800", color: C.text, paddingHorizontal: 20, marginTop: 10 },
  greetingSub:  { fontSize: 13, color: C.textGray, paddingHorizontal: 20, marginBottom: 14 },
  searchBar:    { marginHorizontal: 20, marginBottom: 4, flexDirection: "row", alignItems: "center", backgroundColor: C.purple, borderRadius: 30, paddingHorizontal: 16, paddingVertical: 13 },
  filterBtn:    { backgroundColor: "rgba(255,255,255,0.2)", borderRadius: 20, padding: 7 },
  catItem:      { alignItems: "center", backgroundColor: C.white, borderRadius: 14, paddingHorizontal: 14, paddingVertical: 10, borderWidth: 1, borderColor: C.border, minWidth: 70 },
  catItemActive:{ backgroundColor: C.green, borderColor: C.green },
  catLabel:     { fontSize: 10, fontWeight: "700", color: C.textGray, marginTop: 4 },
  heroBanner:   { marginHorizontal: 20, borderRadius: 20, overflow: "hidden", height: 155, position: "relative" },
  heroBg:       { position: "absolute", width: "100%", height: "100%", resizeMode: "cover" },
  heroOverlay:  { position: "absolute", width: "100%", height: "100%", backgroundColor: "rgba(0,0,0,0.6)" },
  heroContent:  { flex: 1, flexDirection: "row", alignItems: "center", padding: 20 },
  heroTitle:    { fontSize: 26, fontWeight: "900", color: C.yellow },
  heroSub:      { fontSize: 12, color: "#DDD", marginTop: 2 },
  heroRating:   { fontSize: 11, color: "#CCC" },
  heroAvatar:   { width: 24, height: 24, borderRadius: 12, borderWidth: 1.5, borderColor: "#FFF" },
  heroFoodImg:  { width: 95, height: 95, borderRadius: 48, resizeMode: "cover" },
  heroBadge:    { position: "absolute", top: 12, right: 100, backgroundColor: C.purple, borderRadius: 10, paddingHorizontal: 10, paddingVertical: 5, alignItems: "center" },
  dot:          { width: 6, height: 6, borderRadius: 3, backgroundColor: C.border },
  dotActive:    { width: 20, backgroundColor: C.purple },
  secHeader:    { flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingHorizontal: 20, marginTop: 18, marginBottom: 12 },
  secTitle:     { fontSize: 17, fontWeight: "700", color: C.text },
  seeAll:       { fontSize: 13, color: C.purple, fontWeight: "600" },
  grid:         { flexDirection: "row", flexWrap: "wrap", paddingHorizontal: 20, marginBottom: 10 },
  foodCard:     { width: (W - 52) / 2, backgroundColor: C.white, borderRadius: 16, overflow: "hidden", borderWidth: 1, borderColor: C.border, marginBottom: 12 },
  foodCardImg:  { width: "100%", height: 110, resizeMode: "cover" },
  foodCardName: { fontSize: 13, fontWeight: "700", color: C.text, marginBottom: 2 },
  favBtn:       { position: "absolute", top: 8, right: 8, backgroundColor: "rgba(255,255,255,0.85)", borderRadius: 16, width: 30, height: 30, alignItems: "center", justifyContent: "center" },
  tagBadge:     { position: "absolute", top: 8, left: 8, backgroundColor: C.purple, borderRadius: 6, paddingHorizontal: 6, paddingVertical: 2 },
  tagBadgeText: { color: "#FFF", fontSize: 9, fontWeight: "700" },
  addBtn:       { backgroundColor: C.purple, borderRadius: 8, width: 28, height: 28, alignItems: "center", justifyContent: "center" },
  addBtnText:   { color: "#FFF", fontSize: 18, fontWeight: "700", lineHeight: 22 },
  statBox:      { flex: 1, backgroundColor: C.white, borderRadius: 14, padding: 14, alignItems: "center", borderWidth: 1, borderColor: C.border },
});

// Order screen styles
const os = StyleSheet.create({
  header:       { flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingHorizontal: 20, paddingTop: 50, paddingBottom: 14, backgroundColor: C.white },
  circleBtn:    { width: 40, height: 40, borderRadius: 20, borderWidth: 1, borderColor: C.border, alignItems: "center", justifyContent: "center", backgroundColor: C.white },
  headerTitle:  { fontSize: 18, fontWeight: "700", color: C.text },
  bigImgWrap:   { width: "100%", height: 290, position: "relative" },
  bigImg:       { width: "100%", height: "100%", resizeMode: "cover" },
  offBadge:     { position: "absolute", top: 18, left: 18, backgroundColor: C.purple, borderRadius: 10, paddingHorizontal: 12, paddingVertical: 8, alignItems: "center" },
  offText:      { color: "#FFF", fontSize: 13, fontWeight: "900", lineHeight: 17 },
  thumbRow:     { position: "absolute", bottom: 16, left: 16, flexDirection: "row" },
  thumb:        { width: 66, height: 52, borderRadius: 10, backgroundColor: "#FFF", marginRight: 8, overflow: "hidden" },
  nameRow:      { flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: 20, marginBottom: 10 },
  foodName:     { fontSize: 32, fontWeight: "900", color: C.text, letterSpacing: -1 },
  foodPrice:    { fontSize: 30, fontWeight: "900", color: C.purple },
  ratingRow:    { flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginBottom: 22 },
  qtyAdd:       { width: 42, height: 42, borderRadius: 10, backgroundColor: C.purple, alignItems: "center", justifyContent: "center", marginRight: 12 },
  checkIcon:    { flexDirection: "row", alignItems: "center" },
  qtyNum:       { fontSize: 18, fontWeight: "700", color: C.text, minWidth: 30, textAlign: "center" },
  qtyMinus:     { width: 36, height: 36, borderRadius: 18, borderWidth: 1.5, borderColor: "#D1D5DB", alignItems: "center", justifyContent: "center", marginLeft: 12, backgroundColor: C.white },
  deliveryWrap: { flexDirection: "row", alignItems: "center", marginBottom: 20 },
  deliveryBox:  { flex: 1, flexDirection: "row", alignItems: "center", backgroundColor: C.greenLight, borderRadius: 16, padding: 16, marginRight: 12 },
  pinWrap:      { marginRight: 12 },
  deliveryLabel: { fontSize: 12, color: C.textGray },
  deliveryValue: { fontSize: 14, fontWeight: "700", color: C.text, marginTop: 2 },
  editBtn:      { width: 54, height: 54, borderRadius: 14, backgroundColor: C.purpleLight, alignItems: "center", justifyContent: "center" },
  payRow:       { flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginBottom: 20 },
  cardImg:      { width: 52, height: 34, borderRadius: 6, marginRight: 12, resizeMode: "cover" },
  payLabel:     { fontSize: 16, fontWeight: "600", color: C.text },
  changeBtn:    { borderWidth: 1.5, borderColor: C.purple, borderRadius: 22, paddingHorizontal: 20, paddingVertical: 9 },
  changeBtnText: { color: C.purple, fontWeight: "600", fontSize: 14 },
  summaryTitle: { fontSize: 17, fontWeight: "700", color: C.text, marginBottom: 16 },
  summaryRow:   { flexDirection: "row", justifyContent: "space-between", marginBottom: 12 },
  summaryLabel: { fontSize: 14, color: C.textGray },
  summaryValue: { fontSize: 14, color: C.text },
  totalRow:     { flexDirection: "row", justifyContent: "space-between", marginBottom: 26 },
  totalLabel:   { fontSize: 16, fontWeight: "700", color: C.text },
  totalValue:   { fontSize: 20, fontWeight: "900", color: C.purple },
  confirmBtn:   { backgroundColor: C.purple, borderRadius: 32, paddingVertical: 18, alignItems: "center" },
  confirmText:  { color: "#FFF", fontSize: 18, fontWeight: "700", letterSpacing: 0.5 },
});

// Detail styles
const ds = StyleSheet.create({
  backBtn:  { position: "absolute", top: 44, left: 20, backgroundColor: "rgba(0,0,0,0.4)", borderRadius: 12, width: 40, height: 40, alignItems: "center", justifyContent: "center" },
  heartBtn: { position: "absolute", top: 44, right: 20, backgroundColor: "rgba(0,0,0,0.4)", borderRadius: 12, width: 40, height: 40, alignItems: "center", justifyContent: "center" },
  tagOnImg: { position: "absolute", bottom: 16, right: 16, backgroundColor: C.purple, borderRadius: 10, paddingHorizontal: 12, paddingVertical: 6 },
  qtyBox:   { flexDirection: "row", alignItems: "center", backgroundColor: C.cardBg, borderRadius: 14, paddingHorizontal: 12, paddingVertical: 8, marginRight: 12, borderWidth: 1, borderColor: C.border },
});

// Profile styles
const ps = StyleSheet.create({
  heroCard:   { marginHorizontal: 20, borderRadius: 20, backgroundColor: "#FFFBEB", alignItems: "center", paddingVertical: 28, marginBottom: 16 },
  avatarWrap: { position: "relative", marginBottom: 14 },
  avatarRing: { width: 104, height: 104, borderRadius: 52, borderWidth: 3, borderColor: "#F59E0B", padding: 3, backgroundColor: "#FFF" },
  avatarImg:  { width: "100%", height: "100%", borderRadius: 48, resizeMode: "cover" },
  editBtn:    { position: "absolute", bottom: 2, right: -2, backgroundColor: C.purple, borderRadius: 14, width: 28, height: 28, alignItems: "center", justifyContent: "center" },
  name:       { fontSize: 20, fontWeight: "800", color: C.text },
  email:      { fontSize: 13, color: C.textGray, marginTop: 4 },
  menuRow:    { flexDirection: "row", alignItems: "center", paddingVertical: 16, borderBottomWidth: 1, borderBottomColor: C.border },
  menuLabel:  { flex: 1, fontSize: 15, fontWeight: "500", color: C.text },
  logoutBtn:  { marginHorizontal: 20, marginTop: 24, backgroundColor: C.purple, borderRadius: 14, padding: 16, alignItems: "center" },
  logoutText: { color: "#FFF", fontWeight: "700", fontSize: 15 },
});

// Bottom nav styles
const nav = StyleSheet.create({
  bar:        { flexDirection: "row", backgroundColor: C.white, borderTopWidth: 1, borderTopColor: C.border, paddingTop: 10, paddingBottom: 8 },
  btn:        { flex: 1, alignItems: "center", paddingVertical: 2 },
  icon:       { width: 26, height: 26, resizeMode: "contain" },
  label:      { fontSize: 9, fontWeight: "600", color: "#9CA3AF", marginTop: 4, letterSpacing: 0.5 },
  labelActive:{ color: C.purple, fontWeight: "700" },
  underline:  { width: 24, height: 2.5, backgroundColor: C.purple, borderRadius: 2, marginTop: 3 },
  badge:      { position: "absolute", top: -4, right: -8, backgroundColor: C.red, borderRadius: 8, minWidth: 16, height: 16, alignItems: "center", justifyContent: "center", paddingHorizontal: 2 },
  badgeText:  { color: "#FFF", fontSize: 9, fontWeight: "800" },
});