/* libfuoten - Qt based library to access the ownCloud/Nextcloud News App API
 * Copyright (C) 2016 Buschtrommel / Matthias Fehring
 * https://www.buschmann23.de/entwicklung/bibliotheken/libfuoten/
 * https://github.com/Buschtrommel/libfuoten
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

#ifndef FUOTENABSTRACTFOLDERMODEL_H
#define FUOTENABSTRACTFOLDERMODEL_H

#include <QObject>
#include "basemodel.h"
#include "../fuoten_global.h"

namespace Fuoten {

class AbstractFolderModelPrivate;
class Folder;

/*!
 * \brief Abstract folder model that provides basic functionalities for folder models.
 *
 * \headerfile "" <Fuoten/Model/AbstractFolderModel>
 */
class FUOTENSHARED_EXPORT AbstractFolderModel : public BaseModel
{
    Q_OBJECT
public:
    AbstractFolderModel(QObject *parent = nullptr);

    QModelIndex findByID(qint64 id) const override;

public Q_SLOTS:
    void load() override;

protected:
    AbstractFolderModel(AbstractFolderModelPrivate &dd, QObject *parent = nullptr);

    void handleStorageChanged() override;

    /*!
     * \brief Returns the list of Folder objects.
     */
    QList<Folder*> folders() const;

protected Q_SLOTS:
    /*!
     * \brief Takes and processes data after folders have been requested.
     *
     * handleStorageChanged() will connect AbstractStorage::requestedFolders() signal to this slot.
     */
    void foldersRequested(const QList<QPair<qint64, QString> > &updatedFolders, const QList<QPair<qint64, QString> > &newFolders, const QList<qint64> &deletedFolders);

    /*!
     * \brief Takes and processes data after a folder has been renamed.
     *
     * handleStorageChanged() will connect AbstractStorage::renamedFolder() signal to this slot.
     */
    void folderRenamed(qint64 id, const QString &newName);

    /*!
     * \brief Takes and processes data after a folder has been created.
     *
     * Will add the new folder to the model. handleStorageChanged() will connect AbstractStorage::createdFolder() to this slot.
     */
    void folderCreated(qint64 id, const QString &name);

    /*!
     * \brief Takes and processes data after a folder has been delted.
     *
     * Will delete the folder identified by \a id from the model. handleStorageChanged() will connect AbstractStorage::deletedFolder() to this slot.
     */
    void folderDeleted(qint64 id);

    /*!
     * \brief Takes and processes data after a folder has been marked as read.
     *
     * Will order the model to reload the data of the folder identified by \id.
     */
    void folderMarkedRead(qint64 id, qint64 newestItem);

private:
    Q_DISABLE_COPY(AbstractFolderModel)
    Q_DECLARE_PRIVATE(AbstractFolderModel)
};

}

#endif // FUOTENABSTRACTFOLDERMODEL_H
