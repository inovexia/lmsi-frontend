const { model, Schema } = require('mongoose'),
  membersSchema = require('../schema/members'),
  rolesSchema = require('../schema/members/roles'),
  membersMediaSchema = require('../schema/members/media'),
  membersInvitesSchema = require('../schema/members/invites'),
  membersQualificationSchema = require('../schema/members/qualification'),
  membersInfoSchema = require('../schema/members/info'),
  membersAddressSchema = require('../schema/members/address'),
  institutesSchema = require('../schema/institutes'),
  institutesMemberSchema = require('../schema/institutes/member'),
  institutesSlotSchema = require('../schema/institutes/slot')

exports.Role = model('Role', Schema(rolesSchema))

exports.Member = model('Member', membersSchema)

exports.MemberMedia = model('MemberMedia', Schema(membersMediaSchema))

exports.MemberInvite = model('MemberInvite', Schema(membersInvitesSchema))

exports.MemberQualification = model(
  'MemberQualification',
  Schema(membersQualificationSchema)
)

exports.MemberQualification = model('MemberInfo', Schema(membersInfoSchema))

exports.MemberAddress = model('MemberAddress', Schema(membersAddressSchema))

exports.Institute = model('Institute', Schema(institutesSchema))

exports.InstituteMember = model(
  'InstituteMember',
  Schema(institutesMemberSchema)
)

exports.InstituteSlot = model('InstituteSlot', Schema(institutesSlotSchema))
