/* libfuoten - Qt based library to access the ownCloud/Nextcloud News App API
 * Copyright (C) 2016-2017 Matthias Fehring
 * https://github.com/Huessenbergnetz/libfuoten
 *
 * This library is free software: you can redistribute it and/or
 * modify it under the terms of the GNU Lesser General Public
 * License as published by the Free Software Foundation; either
 * version 3 of the License, or (at your option) any later version.
 *
 * This library is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
 * Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public
 * License along with this library.  If not, see
 * <http://www.gnu.org/licenses/>.
 */

#ifndef FUOTENACCOUNTVALIDATOR_H
#define FUOTENACCOUNTVALIDATOR_H

#include <QObject>
#include "../fuoten_global.h"

namespace Fuoten {

class AbstractConfiguration;
class Error;

class AccountValidatorPrivate;

/*!
 * \brief Combines the requests of GetVersion, GetStatus and GetUser.
 *
 * This should be used after the user account was setup or changed. Set the \link AccountValidator::configuration configuration \endlink property
 * and call start(). Calling start() will create and invoke GetVersion, GetStatus and GetUser in a row.
 *
 * \headerfile "" <Fuoten/Helpers/AccountValidator>
 * \par Mandatory properties
 * AccountValidator::configuration
 * \sa GetStatus, GetUser, GetVersion
 */
class FUOTENSHARED_EXPORT AccountValidator : public QObject
{
    Q_OBJECT
    /*!
     * \brief Pointer to a AbstractConfiguration object.
     *
     * It is mandatory to set this property to a valid object that contains the authentication data and server configuration.
     * This property can not be changed while inOperation() returns \c true.
     *
     * \par Access functions:
     * <TABLE><TR><TD>AbstractConfiguration*</TD><TD>configuration() const</TD></TR><TR><TD>void</TD><TD>setConfiguration(AbstractConfiguration *nAbstractConfiguration)</TD></TR></TABLE>
     * \par Notifier signal:
     * <TABLE><TR><TD>void</TD><TD>configurationChanged(AbstractConfiguration *configuration)</TD></TR></TABLE>
     */
    Q_PROPERTY(Fuoten::AbstractConfiguration *configuration READ configuration WRITE setConfiguration NOTIFY configurationChanged)
    /*!
     * \brief Returns true while the validation is in operation.
     *
     * \par Access functions:
     * <TABLE><TR><TD>bool</TD><TD>inOperation() const</TD></TR></TABLE>
     * \par Notifier signal:
     * <TABLE><TR><TD>void</TD><TD>inOperationChanged(bool inOperation)</TD></TR></TABLE>
     */
    Q_PROPERTY(bool inOperation READ inOperation NOTIFY inOperationChanged)
    /*!
     * \brief Pointer to an Error object, if any error occurred, otherwise a \c nullptr.
     *
     * \par Access functions:
     * <TABLE><TR><TD>Error*</TD><TD>error() const</TD></TR></TABLE>
     * \par Notifier signal:
     * <TABLE><TR><TD>void</TD><TD>errorChanged(Error *error)</TD></TR></TABLE>
     */
    Q_PROPERTY(Fuoten::Error *error READ error NOTIFY errorChanged)
public:
    /*!
     * \brief Constructs a new AccountValidator object with the given \a parent.
     */
    explicit AccountValidator(QObject *parent = nullptr);

    /*!
     * \brief Deconstructs the AccountValidator object.
     */
    ~AccountValidator();

    /*!
     * \brief Starts the account validation.
     *
     * Will not start the validation process if inOperation returns \c true and will set it to \c true when it starts.
     */
    Q_INVOKABLE void start();

    /*!
     * \brief Returns a pointer to the currently set AbstractConfiguration object.
     * \sa configuration
     */
    AbstractConfiguration *configuration() const;

    /*!
     * \brief Returns \c true while the validation process is active.
     * \sa inOpertion
     */
    bool inOperation() const;

    /*!
     * \brief Returns a pointer to an Error object, if any error occures, otherwise a \c nullptr.
     * \sa error
     */
    Error *error() const;

    /*!
     * \brief Sets the pointer to a AbstractConfiguration object.
     * \sa configuration
     */
    void setConfiguration(AbstractConfiguration *nAbstractConfiguration);

Q_SIGNALS:
    /*!
     * \brief This signal is emitted when the pointer to a AbstractConfiguration object changes.
     * \sa configuration
     */
    void configurationChanged(AbstractConfiguration *configuration);
    /*!
     * \brief This signal is emitted when the operational status changes.
     * \sa inOperation
     */
    void inOperationChanged(bool inOperation);
    /*!
     * \brief This signal is emitted when the pointer to an Error object changes.
     * \sa error
     */
    void errorChanged(Error *error);

    /*!
     * \brief This signal is emitted if the account validation has been succeeded.
     *
     * Will be emitted if at least the News App version can be queried.
     */
    void succeeded();

    /*!
     * \brief This signal is emitted if an error occurred.
     *
     * \sa \link AccountValidator::error error \endlink
     */
    void failed(Error *error);

protected:
    const QScopedPointer<AccountValidatorPrivate> d_ptr;

private Q_SLOTS:
    void setError(Error *nError);
    void gotVersion();
    void gotStatus();
    void gotUser();

private:
    Q_DISABLE_COPY(AccountValidator)
    Q_DECLARE_PRIVATE(AccountValidator)

};

}


#endif // FUOTENACCOUNTVALIDATOR_H
