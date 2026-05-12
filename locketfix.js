var obj = JSON.parse($response.body);
obj.subscriber.subscriptions = {
  "com.locket.gold.premium.yearly": {
    billing_issues_detected_at: null,
    expires_date: "2099-12-31T23:59:59Z",
    is_sandbox: false,
    original_purchase_date: "2024-01-01T00:00:00Z",
    period_type: "active",
    purchase_date: "2024-01-01T00:00:00Z",
    store: "app_store",
    unsubscribe_detected_at: null,
  },
};
obj.subscriber.entitlements = {
  Gold: {
    expires_date: "2099-12-31T23:59:59Z",
    original_purchase_date: "2024-01-01T00:00:00Z",
    purchase_date: "2024-01-01T00:00:00Z",
    product_identifier: "com.locket.gold.premium.yearly",
  },
};
$done({ body: JSON.stringify(obj) });
