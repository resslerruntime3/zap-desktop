import { defineMessages } from 'react-intl'

/* eslint-disable max-len */
export default defineMessages({
  local_balance: 'Local Balance',
  remote_balance: 'Remote Balance',
  channels: 'Channels',
  capacity: 'Capacity',
  total_capacity: 'Total Capacity',
  more_button_text: 'More',
  create_new_button_text: 'Create New',
  loading: 'loading',
  pending_open: 'pending open',
  pending_close: 'pending close',
  pending_force_close: 'pending force close',
  waiting_close: 'closing',
  open: 'open',
  offline: 'offline',
  open_channel_form_title: 'Open a Channel',
  open_channel_form_subtitle: 'Lightning Network',
  open_channel_form_description:
    "Make funds available for sending over the Lightning Network by opening a channel to another node on the network. To open a channel, enter the desired node's publickey@host, set the amount of BTC you'd like to commit to the channel, and submit.",
  open_channel_form_next_button_text: 'Next',
  open_channel_form_onchain_balance: 'Your current on-chain balance:',
  search_placeholder: 'Search Channels',
  view_mode_list: 'View as a list',
  view_mode_card: 'View as cards',
  remote_pubkey: 'Remote PubKey',
  back_button: 'Back',
  total_received: 'Total Money Received',
  last_update: 'Last Update',
  close_button: 'Close Channel',
  force_close_button: 'Force Close Channel',
  unknown: 'Unknown',
  funding_transaction_id_label: 'Funding Transaction',
  funding_transaction_id_description:
    'The transaction that opened this channel, as recorded in the blockchain. You can click the link on the right to view this transaction in a block explorer.',
  num_updates_label: 'Number of Updates',
  num_updates_description: 'The total number of updates within this channel.',
  csv_delay_label: 'Time Lock',
  csv_delay_value: '{csvDelay, plural, zero {0 blocks} one {1 block} other {{csvDelay} blocks}}',
  csv_delay_description:
    'In the event of an uncooperative close (force close) of this channel, the time lock is the number of blocks you will have to wait before you can claim your funds again.',
  total_sent_label: 'Total Money Sent',
  total_sent_description: "The total value you've sent within this channel.",
  total_received_label: 'Total Money Received',
  total_received_description: "The total value you've received within this channel.",
  commit_fee_label: 'Commit Fee',
  commit_fee_description:
    'The amount to be paid in fees for the current set of commitment transactions.',
  base_fee_label: "Node's Fee Base",
  base_fee_description:
    'The required number of {currencyName} per kilo-weight that the requester will pay at all times, for both the funding transaction and commitment transaction.',
  close_channel_dialog_close_text: 'Close',
  close_channel_dialog_force_close_text: 'Force Close',
  close_channel_dialog_cancel_text: 'Cancel',
  close_channel_dialog_header: 'Close channel',
  close_channel_dialog_warning: 'Are you sure you want to close this channel?',
  close_channel_dialog_force_warning:
    'Are you sure you want to force close this channel? By performing an uncooperative close (force close), your funds will be locked for {csvDelay, plural, zero {0 blocks} one {1 block} other {{csvDelay} blocks}} before being spendable again in your wallet.',
  close_channel_dialog_acknowledgement: 'I understand this is an irreversible action',
  close_channel_notification: 'Channel closing initiated'
})
